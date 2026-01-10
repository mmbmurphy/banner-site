import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "CapEx Process Evaluation Guide | Banner",
  description: "A strategic guide for real estate owners and operators to audit CapEx workflows, identify improvements, and build a credible ROI case for modern software.",
};

export default function CapExProcessEvaluationGuide() {
  return (
    <GuideLayout
      title="How to Evaluate Your CapEx Process & Build the ROI Case"
      subtitle="A strategic guide for real estate owners and operators."
      category="Strategic Guide"
      readTime="10 min read"
    >
      {/* Why CapEx Process Evaluation Matters */}
      <h2>Why CapEx Process Evaluation Matters</h2>
      <p>
        Capital expenditure is one of the largest, least-forgiving areas of real estate operations. Yet at many organizations, CapEx processes have evolved organically&mdash;spread across spreadsheets, email threads, legacy systems, and individual workarounds.
      </p>
      <p>
        As portfolios scale, these fragmented processes create real business risk:
      </p>
      <ul>
        <li>Overspending without visibility</li>
        <li>Delays that reduce NOI</li>
        <li>Lost or under-captured fees</li>
        <li>Teams buried in administrative work instead of value creation</li>
        <li>Inconsistent execution across regions, assets, and ownership groups</li>
      </ul>

      <div className="guide-callout">
        <div className="guide-callout-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          The Foundational Question
        </div>
        <p>
          Modern real estate organizations are increasingly stepping back to ask: <strong>Are our CapEx processes designed for control and scale&mdash;or are we managing complexity with people and spreadsheets?</strong>
        </p>
      </div>

      <p>
        This guide outlines a practical, strategic approach to:
      </p>
      <ol>
        <li>Auditing your current CapEx workflows</li>
        <li>Identifying high-impact improvement areas</li>
        <li>Partnering with a software vendor to redesign those processes</li>
        <li>Building a credible ROI case for investment</li>
      </ol>

      {/* Auditing Your Current CapEx Processes */}
      <h2>Auditing Your Current CapEx Processes</h2>
      <p>
        A strong evaluation starts with process, not technology.
      </p>

      <h3>Step 1: Map the Full CapEx Lifecycle</h3>
      <p>
        Most organizations underestimate how many handoffs exist across CapEx. A complete audit should cover:
      </p>
      <ul>
        <li>Budgeting &amp; capital planning</li>
        <li>Due diligence &amp; site walks</li>
        <li>Scope creation &amp; project design</li>
        <li>Bidding &amp; vendor selection</li>
        <li>Approvals (RFAs, change orders)</li>
        <li>Contracting</li>
        <li>Project management &amp; scheduling</li>
        <li>Invoicing &amp; payment tracking</li>
        <li>Unit renovations</li>
        <li>Close-out &amp; documentation</li>
        <li>Reporting &amp; forecasting</li>
      </ul>

      <div className="guide-tip">
        <div className="guide-tip-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          For Each Stage, Document:
        </div>
        <ul>
          <li>Who owns the step</li>
          <li>What tools are used</li>
          <li>Where data is created or re-entered</li>
          <li>Where approvals stall</li>
          <li>Where teams rely on manual judgment instead of system controls</li>
        </ul>
      </div>

      <h3>Step 2: Identify Common Friction Points</h3>
      <p>
        Across the industry, CapEx audits often reveal similar issues:
      </p>

      <ul className="guide-checklist">
        <li>
          <span className="guide-checklist-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <strong>Multiple sources of truth</strong> (Excel vs. ERP vs. email)
        </li>
        <li>
          <span className="guide-checklist-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <strong>Manual data translation</strong> from site notes to budgets to systems
        </li>
        <li>
          <span className="guide-checklist-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <strong>Inconsistent processes</strong> by region, owner, or asset class
        </li>
        <li>
          <span className="guide-checklist-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <strong>Limited real-time visibility</strong> for leadership
        </li>
        <li>
          <span className="guide-checklist-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <strong>Approval workflows</strong> managed outside systems
        </li>
        <li>
          <span className="guide-checklist-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <strong>No standardized close-out</strong> or asset history
        </li>
      </ul>

      <div className="guide-warning">
        <div className="guide-warning-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Hidden Costs
        </div>
        <p>
          These issues rarely break operations overnight&mdash;but they quietly compound cost, risk, and effort over time.
        </p>
      </div>

      {/* Defining the Future-State Process */}
      <h2>Defining the Future-State Process</h2>
      <p>
        The goal of working with a software vendor should not be to &quot;install a tool,&quot; but to <strong>redesign how work flows</strong>.
      </p>

      <h3>What Best-in-Class Future States Have in Common</h3>
      <p>
        High-performing CapEx organizations consistently move toward:
      </p>

      <div className="guide-stats-grid">
        <div className="guide-stat-card">
          <div className="guide-stat-value">Single</div>
          <div className="guide-stat-label">System of record for all CapEx data</div>
        </div>
        <div className="guide-stat-card">
          <div className="guide-stat-value">Standard</div>
          <div className="guide-stat-label">Workflows across regions and assets</div>
        </div>
        <div className="guide-stat-card">
          <div className="guide-stat-value">Real-Time</div>
          <div className="guide-stat-label">Reporting based on live project data</div>
        </div>
      </div>

      <ul>
        <li><strong>Field-to-finance connectivity</strong> (mobile &rarr; approvals &rarr; accounting)</li>
        <li><strong>Automated handoffs</strong> between bidding, approvals, contracts, and invoices</li>
        <li><strong>Real-time reporting</strong> based on live project data</li>
      </ul>

      <h3>How to Collaborate During Discovery</h3>
      <p>
        The most effective software partnerships follow a structured discovery approach:
      </p>

      <div className="guide-steps">
        <div className="guide-step">
          <div className="guide-step-number">1</div>
          <div className="guide-step-content">
            <h4>Stakeholder Interviews</h4>
            <p>
              Conduct interviews across construction, asset management, finance, and operations to understand pain points from multiple perspectives.
            </p>
          </div>
        </div>
        <div className="guide-step">
          <div className="guide-step-number">2</div>
          <div className="guide-step-content">
            <h4>Side-by-Side Documentation</h4>
            <p>
              Document current vs. desired workflows in parallel to identify gaps and opportunities for improvement.
            </p>
          </div>
        </div>
        <div className="guide-step">
          <div className="guide-step-number">3</div>
          <div className="guide-step-content">
            <h4>Identify Quick Wins</h4>
            <p>
              Separate quick wins from longer-term transformation initiatives to build momentum and demonstrate value early.
            </p>
          </div>
        </div>
        <div className="guide-step">
          <div className="guide-step-number">4</div>
          <div className="guide-step-content">
            <h4>Align on Boundaries</h4>
            <p>
              Define what <em>not</em> to change initially. This ensures technology supports your business&mdash;not the other way around.
            </p>
          </div>
        </div>
      </div>

      {/* Quantifying ROI */}
      <h2>Quantifying ROI: A Practical Framework</h2>
      <p>
        ROI calculations should be grounded, conservative, and defensible.
      </p>

      <h3>Hard ROI Categories (Directly Measurable)</h3>

      <div className="guide-table-wrapper">
        <table className="guide-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Key Metrics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Administrative Efficiency</strong></td>
              <td>Reduction in manual data entry, fewer handoffs between teams, ability to reallocate or avoid incremental headcount</td>
            </tr>
            <tr>
              <td><strong>Field Team Productivity</strong></td>
              <td>Less time spent on reporting and coordination, more projects managed per person, faster turnaround on approvals</td>
            </tr>
            <tr>
              <td><strong>Cost &amp; Fee Capture</strong></td>
              <td>Reduced leakage from missed fees or untracked invoices, improved bid coverage and vendor competition, fewer costly errors and rework</td>
            </tr>
            <tr>
              <td><strong>Cycle Time Reduction</strong></td>
              <td>Faster unit renovations, shorter approval and contracting timelines, earlier revenue realization</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Soft ROI Categories (Strategic Impact)</h3>
      <p>
        While harder to model, these often matter most to leadership:
      </p>
      <ul>
        <li>Consistent execution across the portfolio</li>
        <li>Stronger owner and investor confidence</li>
        <li>Better long-term capital forecasting</li>
        <li>Improved ability to scale without chaos</li>
        <li>Professional, modern experience for vendors and partners</li>
      </ul>

      <div className="guide-tip">
        <div className="guide-tip-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          Balance Is Key
        </div>
        <p>
          A strong ROI case combines both hard and soft categories&mdash;without overstating either.
        </p>
      </div>

      {/* Making the Business Case */}
      <h2>Making the Business Case Internally</h2>
      <p>
        When presenting your findings, focus less on software features and more on <strong>business outcomes</strong>.
      </p>

      <h3>What Decision-Makers Care About</h3>
      <div className="guide-stats-grid">
        <div className="guide-stat-card">
          <div className="guide-stat-value">Risk</div>
          <div className="guide-stat-label">Reduction &amp; mitigation</div>
        </div>
        <div className="guide-stat-card">
          <div className="guide-stat-value">Control</div>
          <div className="guide-stat-label">Financial visibility</div>
        </div>
        <div className="guide-stat-card">
          <div className="guide-stat-value">Scale</div>
          <div className="guide-stat-label">Growth without chaos</div>
        </div>
      </div>

      <ul>
        <li><strong>Risk reduction</strong> &mdash; Minimize exposure from fragmented processes</li>
        <li><strong>Financial control</strong> &mdash; Real-time visibility into spend and commitments</li>
        <li><strong>Scalability</strong> &mdash; Grow the portfolio without linear headcount growth</li>
        <li><strong>Team leverage</strong> &mdash; Free skilled professionals from administrative burden</li>
        <li><strong>Data confidence</strong> &mdash; Trust the numbers in every report</li>
      </ul>

      <blockquote>
        <p>
          Position CapEx software as an <strong>operating system for capital</strong>&mdash;not a reporting layer.
        </p>
      </blockquote>

      {/* A Final Perspective */}
      <h2>A Final Perspective</h2>
      <p>
        Most organizations don&apos;t fail at CapEx because they lack effort or expertise. They struggle because their processes were never designed to scale.
      </p>
      <p>
        A thoughtful evaluation&mdash;paired with the right technology partner&mdash;can turn CapEx from a reactive cost center into a controlled, strategic advantage.
      </p>

      <div className="guide-callout">
        <div className="guide-callout-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          The Bottom Line
        </div>
        <p>
          Every portfolio is different; the highest ROI comes from aligning software capabilities with your specific operating model. Start with process, build a defensible case, and partner with a vendor who understands real estate operations.
        </p>
      </div>
    </GuideLayout>
  );
}
