"use client";

import { useEffect, useRef } from "react";

interface HubSpotEmbedProps {
  meetingUrl: string;
}

export default function HubSpotEmbed({ meetingUrl }: HubSpotEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the HubSpot script
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;

    script.onload = () => {
      // After script loads, initialize the embed
      if (containerRef.current && window.HubSpotMeetings) {
        // Clear any existing content
        containerRef.current.innerHTML = "";

        // Create the meetings container
        const meetingsDiv = document.createElement("div");
        meetingsDiv.className = "meetings-iframe-container";
        meetingsDiv.setAttribute("data-src", meetingUrl);
        containerRef.current.appendChild(meetingsDiv);

        // Re-run the HubSpot embed code
        window.HubSpotMeetings.create(meetingsDiv);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [meetingUrl]);

  return (
    <div ref={containerRef} className="hubspot-embed-container">
      <div
        className="meetings-iframe-container"
        data-src={meetingUrl}
      ></div>
    </div>
  );
}

// Add type declaration for HubSpot
declare global {
  interface Window {
    HubSpotMeetings?: {
      create: (element: HTMLElement) => void;
    };
  }
}
