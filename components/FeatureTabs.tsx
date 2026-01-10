"use client";

import { useState } from "react";

const tabs = [
  {
    id: "tab-1",
    label: "Portfolio Visibility",
    title: "See where\nspend stands",
    description:
      "Track forecasts against budget in real time, identify change order hotspots, and deliver reports that leadership trusts.",
    features: [
      {
        icon: "/images/Frame.svg",
        title: "Portfolio View",
        description:
          "Summarize CapEx data the way you need it — by portfolio, fund, property, & more.",
      },
      {
        icon: "/images/TreeStructure.svg",
        title: "Accounting Integration",
        description:
          "Every number connects back to the GL, so you know the data is accurate and defensible.",
      },
      {
        icon: "/images/CursorClick.svg",
        title: "One-Click Reporting",
        description:
          "Turn any custom view into a shareable PDF in seconds, ready for any stakeholder.",
      },
    ],
    image: "/images/Imagery.png",
    imageSrcSet:
      "/images/Imagery-p-500.png 500w, /images/Imagery-p-800.png 800w, /images/Imagery-p-1080.png 1080w, /images/Imagery.png 1384w",
  },
  {
    id: "tab-2",
    label: "Cost Control Workflows",
    title: "Set up guardrails and approvals",
    description:
      "Route changes through smart approval chains, prevent duplicate invoice payments, and keep project budgets aligned to the capital plan.",
    features: [
      {
        icon: "/images/list.svg",
        title: "Tiered Approval Rules",
        description:
          "Approvals match the spend. Small costs clear fast, bigger ones go up to leadership.",
      },
      {
        icon: "/images/copy.svg",
        title: "Duplicate Payment Prevention",
        description:
          "Avoid invoice issues like duplicates, discrepancies, unapproved expenses, or spend that exceeds commitments.",
      },
      {
        icon: "/images/HandCoins.svg",
        title: "Budget Reallocation",
        description:
          "Enforce trade-offs when reallocating funds, so every shift comes from somewhere.",
      },
    ],
    image: "/images/Imagery_1.png",
    imageSrcSet:
      "/images/Imagery_1-p-500.png 500w, /images/Imagery_1-p-800.png 800w, /images/Imagery_1-p-1080.png 1080w, /images/Imagery_1.png 1382w",
  },
  {
    id: "tab-3",
    label: "Accurate Forecasts",
    title: "Get forecasting you can bet on",
    description:
      "Banner delivers accurate, real-time forecasts by combining project status and timelines with up-to-date invoicing and payment data.",
    features: [
      {
        icon: "/images/scuba.svg",
        title: "Anticipate Costs",
        description: "Complete real-time view of all committed and potential costs",
      },
      {
        icon: "/images/Frame-2.svg",
        title: "Project Timelines",
        description: "Update key project milestones in coordination with contractors",
      },
      {
        icon: "/images/IntersectThree.svg",
        title: "Accounting Integrations",
        description:
          "Connects with all major property management and accounting systems",
      },
    ],
    image: "/images/Imagery3.png",
    imageSrcSet:
      "/images/Imagery3-p-500.png 500w, /images/Imagery3-p-800.png 800w, /images/Imagery3-p-1080.png 1080w, /images/Imagery3.png 1362w",
  },
  {
    id: "tab-4",
    label: "Automated Vendor Management",
    title: "Unblock your construction managers",
    description:
      "Banner lets managers launch RFPs, secure bids, and compare them side by side. Contracts get awarded quickly, and vendor files stay in one spot.",
    features: [
      {
        icon: "/images/note.svg",
        title: "Automated Bidding",
        description:
          "Simplify bidding with automated RFPs that collect, remind, and organize vendor responses.",
      },
      {
        icon: "/images/pad.svg",
        title: "Centralized Document Repository",
        description:
          "Store every bid, contract, and vendor file in one place instead of scattered inboxes & drives.",
      },
      {
        icon: "/images/chart.svg",
        title: "Automated Contract Creation & Award Workflow",
        description:
          "From review to award to budget, contracts automatically flow through in one clean process.",
      },
    ],
    image: "/images/Imagery4.png",
    imageSrcSet:
      "/images/Imagery4-p-500.png 500w, /images/Imagery4-p-800.png 800w, /images/Imagery4-p-1080.png 1080w, /images/Imagery4.png 1362w",
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section_layout507">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="layout507_component">
              <div>
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h2 className="heading-style-h2">Banner changes everything</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="layout_tabs">
                <div className="layout_tabs-menu">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`lay-tab-link${activeTab === index ? " active" : ""}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div>{tab.label}</div>
                    </button>
                  ))}
                </div>
                <div className="layout_tabs-content">
                  <div className="layout507_card">
                    <div className="layout507_card-content-bottom">
                      <div className="layout507_card-content-top">
                        <h2 className="heading-style-h3-2">
                          {tabs[activeTab].title.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < tabs[activeTab].title.split("\n").length - 1 && <br />}
                            </span>
                          ))}
                        </h2>
                        <p className="paragraph-2">{tabs[activeTab].description}</p>
                      </div>
                      <div className="card-content-bottom">
                        {tabs[activeTab].features.map((feature, index) => (
                          <div className="card-content-wrapp" key={index}>
                            <div className="card-content-flex">
                              <img loading="lazy" src={feature.icon} alt="" />
                              <div className="text-size-regular">{feature.title}</div>
                            </div>
                            <p className="text-size-small">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="layout507_image-wrapper">
                      <img
                        sizes="(max-width: 1384px) 100vw, 1384px"
                        srcSet={tabs[activeTab].imageSrcSet}
                        alt=""
                        src={tabs[activeTab].image}
                        loading="lazy"
                        className="layout507_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
