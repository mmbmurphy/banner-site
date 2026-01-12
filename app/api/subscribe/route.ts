import { NextRequest, NextResponse } from "next/server";
import { isPersonalEmail, isValidEmail } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, companyName } = body;

    // Validate inputs
    if (!email || !companyName) {
      return NextResponse.json(
        { error: "Email and company name are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Check for personal email
    if (isPersonalEmail(email)) {
      return NextResponse.json(
        { error: "Please use your company email address" },
        { status: 400 }
      );
    }

    // Get Beehiiv credentials
    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error("Beehiiv credentials not configured");
      return NextResponse.json(
        { error: "Subscription service not configured" },
        { status: 500 }
      );
    }

    // Subscribe to Beehiiv
    const beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: "website",
          utm_medium: "subscribe_popup",
          custom_fields: [
            {
              name: "company_name",
              value: companyName.trim(),
            },
          ],
        }),
      }
    );

    const beehiivData = await beehiivResponse.json();

    if (!beehiivResponse.ok) {
      console.error("Beehiiv error:", beehiivData);

      // Check if already subscribed
      if (beehiivData.message?.includes("already") || beehiivResponse.status === 409) {
        return NextResponse.json(
          { error: "This email is already subscribed" },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    // Send Slack notification
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackWebhookUrl) {
      try {
        await fetch(slackWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blocks: [
              {
                type: "header",
                text: {
                  type: "plain_text",
                  text: "New Subscriber!",
                  emoji: true,
                },
              },
              {
                type: "section",
                fields: [
                  {
                    type: "mrkdwn",
                    text: `*Email:*\n${email}`,
                  },
                  {
                    type: "mrkdwn",
                    text: `*Company:*\n${companyName}`,
                  },
                ],
              },
              {
                type: "context",
                elements: [
                  {
                    type: "mrkdwn",
                    text: `Subscribed via website popup at ${new Date().toLocaleString()} • Added to Beehiiv`,
                  },
                ],
              },
            ],
          }),
        });
      } catch (slackError) {
        // Log but don't fail the request if Slack notification fails
        console.error("Slack notification error:", slackError);
      }
    }

    return NextResponse.json({ success: true, data: beehiivData });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
