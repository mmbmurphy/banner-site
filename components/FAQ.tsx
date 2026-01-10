"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Banner and who is it for?",
    answer: "Banner is an enterprise capital expenditure (CapEx) management platform built specifically for commercial real estate owners, operators, and developers. We help teams manage everything from multi-year capital planning to day-to-day project execution—replacing spreadsheets, disconnected tools, and email chains with one unified system that provides real-time visibility across your entire portfolio."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Most customers are fully operational on Banner within 4-6 weeks. Our implementation team works closely with you to migrate historical data, configure workflows to match your processes, integrate with your accounting system, and train your team. For larger portfolios or complex requirements, we offer phased rollouts to ensure a smooth transition."
  },
  {
    question: "Does Banner integrate with our existing systems?",
    answer: "Yes. Banner integrates with all major property management and accounting systems including Yardi, RealPage, MRI, AppFolio, Entrata, QuickBooks, and more. Our integrations sync data bidirectionally in real-time, so your financial data stays accurate across all systems without manual reconciliation."
  },
  {
    question: "How is Banner different from spreadsheets or other project management tools?",
    answer: "Unlike generic tools, Banner is purpose-built for real estate CapEx. This means built-in workflows for budgeting, approvals, bidding, invoicing, lender draws, and reporting—all connected in one system. You get real-time visibility from portfolio level down to individual line items, automatic budget tracking, and audit-ready documentation without the manual work of maintaining spreadsheets or stitching together multiple tools."
  },
  {
    question: "What kind of support do you provide?",
    answer: "Every Banner customer gets a dedicated Customer Success Manager, plus access to our support team via email, phone, and in-app chat during business hours. Enterprise customers receive priority support with guaranteed response times, quarterly business reviews, and access to our implementation team for ongoing optimization. We also provide comprehensive training resources and documentation."
  },
  {
    question: "Is our data secure?",
    answer: "Absolutely. Banner is built with enterprise-grade security including SOC 2 Type II compliance, 256-bit AES encryption for data at rest, TLS 1.2+ for data in transit, and regular third-party penetration testing. We maintain 99.9% uptime SLA and perform automated backups. Your data is hosted on AWS infrastructure with strict access controls and comprehensive audit logging."
  },
  {
    question: "Can Banner handle portfolios of any size?",
    answer: "Yes. Banner scales from portfolios of a few properties to enterprises managing thousands of assets and billions in CapEx. Our platform is designed for performance at scale—customers manage 50,000+ active projects on Banner without slowdown. Whether you're a growing operator or a large institutional owner, Banner adapts to your needs."
  },
  {
    question: "How does pricing work?",
    answer: "Banner pricing is based on portfolio size and the modules you need. We offer flexible subscription plans with no long-term commitment required to start. Contact our team for a customized quote based on your specific requirements—we'll walk you through options and find the right fit for your organization."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faqs">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <ScrollReveal>
              <div className="faq-header">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <p className="faq-subtitle">
                  Everything you need to know about Banner. Can't find what you're looking for?{" "}
                  <a href="/contact" className="faq-contact-link">Contact our team</a>.
                </p>
              </div>
            </ScrollReveal>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <div
                    className={`faq-item ${openIndex === index ? "faq-item-open" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openIndex === index}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease"
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="faq-answer"
                      style={{
                        maxHeight: openIndex === index ? "500px" : "0",
                        opacity: openIndex === index ? 1 : 0,
                        paddingBottom: openIndex === index ? "1.5rem" : "0",
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
