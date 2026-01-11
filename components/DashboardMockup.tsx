"use client";

import React from "react";

// Types for the component system
interface ProgressBarData {
  label: string;
  value: number;
  max: number;
  color: string;
}

interface DonutSegment {
  value: number;
  color: string;
  label?: string;
}

interface PropertyItem {
  name: string;
  checked?: boolean;
}

interface BudgetCardProps {
  title: string;
  remainingLabel?: string;
  remainingValue: string;
  items: ProgressBarData[];
  buttons?: { primary: string; secondary: string };
  compact?: boolean;
}

interface StatusCardProps {
  title: string;
  segments: DonutSegment[];
  centerLabel?: string;
  centerValue?: string;
  properties?: PropertyItem[];
  searchPlaceholder?: string;
  compact?: boolean;
}

interface MiniStatusCardProps {
  title: string;
  segments: DonutSegment[];
  sideLabel?: string;
  sideValue?: string;
}

interface PropertyCardProps {
  properties: PropertyItem[];
  searchPlaceholder?: string;
}

interface ProjectCardProps {
  title: string;
  status: "on-track" | "at-risk" | "delayed" | "completed";
  progress: number;
  budget?: string;
  spent?: string;
  dueDate?: string;
}

interface TimelineItemProps {
  date: string;
  title: string;
  status: "completed" | "in-progress" | "upcoming";
}

interface VendorCardProps {
  name: string;
  type: string;
  rating: number;
  activeProjects: number;
}

// Color palette
const colors = {
  green: "#22c55e",
  red: "#ef4444",
  purple: "#a855f7",
  blue: "#3b82f6",
  orange: "#f97316",
  teal: "#14b8a6",
  pink: "#ec4899",
  indigo: "#6366f1",
  gray: "#e5e7eb",
};

// Donut Chart Component
function DonutChart({ segments, size = 80, strokeWidth = 12, centerLabel, centerValue }: {
  segments: DonutSegment[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerValue?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((acc, seg) => acc + seg.value, 0);

  let currentOffset = 0;

  return (
    <div className="dm-donut-wrapper" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {segments.map((segment, index) => {
          const segmentLength = (segment.value / total) * circumference;
          const offset = currentOffset;
          currentOffset += segmentLength;

          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
              strokeDashoffset={-offset}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
              style={{ transition: "stroke-dasharray 0.5s ease" }}
            />
          );
        })}
      </svg>
      {(centerLabel || centerValue) && (
        <div className="dm-donut-center">
          {centerLabel && <span className="dm-donut-label">{centerLabel}</span>}
          {centerValue && <span className="dm-donut-value">{centerValue}</span>}
        </div>
      )}
    </div>
  );
}

// Progress Bar Component
function ProgressBar({ label, value, max, color }: ProgressBarData) {
  const percentage = (value / max) * 100;

  return (
    <div className="dm-progress-row">
      <div className="dm-progress-header">
        <span className="dm-progress-label">{label}</span>
        <span className="dm-progress-value">${value.toLocaleString()}</span>
      </div>
      <div className="dm-progress-track">
        <div
          className="dm-progress-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

// Budget Card Component
function BudgetCard({ title, remainingLabel = "Budget Remaining", remainingValue, items, buttons, compact }: BudgetCardProps) {
  return (
    <div className={`dm-card dm-budget-card ${compact ? "dm-card-compact" : ""}`}>
      <h3 className="dm-card-title">{title}</h3>
      <div className="dm-remaining-box">
        <span className="dm-remaining-label">{remainingLabel}</span>
        <span className="dm-remaining-value">{remainingValue}</span>
      </div>
      <div className="dm-progress-list">
        {items.map((item, index) => (
          <ProgressBar key={index} {...item} />
        ))}
      </div>
      {buttons && (
        <div className="dm-button-group">
          <button className="dm-btn dm-btn-primary">{buttons.primary}</button>
          <button className="dm-btn dm-btn-secondary">{buttons.secondary}</button>
        </div>
      )}
    </div>
  );
}

// Mini Status Card - Compact card with horizontal donut + value
function MiniStatusCard({ title, segments, sideLabel, sideValue }: MiniStatusCardProps) {
  return (
    <div className="dm-card dm-card-compact dm-mini-status-card">
      <h3 className="dm-card-title">{title}</h3>
      <div className="dm-donut-horizontal">
        <DonutChart segments={segments} size={56} strokeWidth={8} />
        {(sideLabel || sideValue) && (
          <div className="dm-donut-side-label">
            {sideLabel && <span className="dm-donut-label">{sideLabel}</span>}
            {sideValue && <span className="dm-donut-value">{sideValue}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

// Property Card - Compact card with property list
function PropertyCard({ properties, searchPlaceholder }: PropertyCardProps) {
  return (
    <div className="dm-card dm-card-compact dm-property-card">
      {searchPlaceholder && (
        <div className="dm-search-box">
          <span className="dm-search-all">All</span>
          <input type="text" placeholder={searchPlaceholder} className="dm-search-input" readOnly />
          <span className="dm-search-icons">
            <span className="dm-search-x">×</span>
            <span className="dm-search-icon">⌕</span>
          </span>
        </div>
      )}
      <div className="dm-property-list">
        {properties.map((property, index) => (
          <div key={index} className="dm-property-item">
            <span className={`dm-checkbox ${property.checked ? "checked" : ""}`} />
            <span className="dm-property-name">{property.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Status Card with Donut Chart
function StatusCard({ title, segments, centerLabel, centerValue, properties, searchPlaceholder, compact }: StatusCardProps) {
  return (
    <div className={`dm-card dm-status-card ${compact ? "dm-card-compact" : ""}`}>
      <h3 className="dm-card-title">{title}</h3>
      <div className="dm-status-content">
        <DonutChart
          segments={segments}
          size={compact ? 64 : 80}
          strokeWidth={compact ? 9 : 12}
          centerLabel={centerLabel}
          centerValue={centerValue}
        />
      </div>
      {properties && (
        <>
          {searchPlaceholder && (
            <div className="dm-search-box">
              <span className="dm-search-all">All</span>
              <input type="text" placeholder={searchPlaceholder} className="dm-search-input" readOnly />
              <span className="dm-search-icons">
                <span className="dm-search-x">×</span>
                <span className="dm-search-icon">⌕</span>
              </span>
            </div>
          )}
          <div className="dm-property-list">
            {properties.map((property, index) => (
              <div key={index} className="dm-property-item">
                <span className={`dm-checkbox ${property.checked ? "checked" : ""}`} />
                <span className="dm-property-name">{property.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface ProjectCardFullProps extends ProjectCardProps {
  compact?: boolean;
}

// Project Card Component
function ProjectCard({ title, status, progress, budget, spent, dueDate, compact }: ProjectCardFullProps) {
  const statusColors = {
    "on-track": colors.green,
    "at-risk": colors.orange,
    "delayed": colors.red,
    "completed": colors.blue,
  };

  const statusLabels = {
    "on-track": "On Track",
    "at-risk": "At Risk",
    "delayed": "Delayed",
    "completed": "Completed",
  };

  return (
    <div className={`dm-card dm-project-card ${compact ? "dm-card-compact" : ""}`}>
      <div className="dm-project-header">
        <h4 className="dm-project-title">{title}</h4>
        <span className="dm-status-badge" style={{ backgroundColor: `${statusColors[status]}20`, color: statusColors[status] }}>
          {statusLabels[status]}
        </span>
      </div>
      <div className="dm-project-progress">
        <div className="dm-progress-track">
          <div className="dm-progress-fill" style={{ width: `${progress}%`, backgroundColor: statusColors[status] }} />
        </div>
        <span className="dm-progress-percent">{progress}%</span>
      </div>
      {(budget || spent || dueDate) && (
        <div className="dm-project-meta">
          {budget && <span className="dm-meta-item">Budget: {budget}</span>}
          {spent && <span className="dm-meta-item">Spent: {spent}</span>}
          {dueDate && <span className="dm-meta-item">Due: {dueDate}</span>}
        </div>
      )}
    </div>
  );
}

// Timeline Component
function Timeline({ items }: { items: TimelineItemProps[] }) {
  return (
    <div className="dm-timeline">
      {items.map((item, index) => (
        <div key={index} className={`dm-timeline-item dm-timeline-${item.status}`}>
          <div className="dm-timeline-dot" />
          <div className="dm-timeline-content">
            <span className="dm-timeline-date">{item.date}</span>
            <span className="dm-timeline-title">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Vendor Row Component
function VendorRow({ name, type, rating, activeProjects }: VendorCardProps) {
  return (
    <div className="dm-vendor-row">
      <div className="dm-vendor-info">
        <span className="dm-vendor-name">{name}</span>
        <span className="dm-vendor-type">{type}</span>
      </div>
      <div className="dm-vendor-rating">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <span className="dm-vendor-projects">{activeProjects} projects</span>
    </div>
  );
}

// Metric Card Component
function MetricCard({ label, value, trend, trendUp }: { label: string; value: string; trend?: string; trendUp?: boolean }) {
  return (
    <div className="dm-metric-card">
      <span className="dm-metric-value">{value}</span>
      <span className="dm-metric-label">{label}</span>
      {trend && (
        <span className={`dm-metric-trend ${trendUp ? "up" : "down"}`}>
          {trendUp ? "↑" : "↓"} {trend}
        </span>
      )}
    </div>
  );
}

// Pre-configured mockup variants
export type MockupVariant =
  | "financial-budget"
  | "financial-forecasting"
  | "project-timeline"
  | "project-status"
  | "multifamily-portfolio"
  | "commercial-overview"
  | "developers-draw"
  | "approvals"
  | "bidding"
  | "vendor-management"
  | "dev-draw-management"
  | "dev-budget-control"
  | "dev-portfolio-view";

// Main component with variants
export default function DashboardMockup({ variant }: { variant: MockupVariant }) {
  const renderVariant = () => {
    switch (variant) {
      case "financial-budget":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <BudgetCard
              title="Budget vs Forecasting"
              remainingValue="$35,000.00"
              items={[
                { label: "Budget", value: 42250, max: 50000, color: colors.green },
                { label: "Forecast", value: 32750, max: 50000, color: colors.red },
                { label: "Committed", value: 16000, max: 50000, color: colors.purple },
                { label: "Invoiced", value: 4950, max: 50000, color: colors.blue },
              ]}
              buttons={{ primary: "Review", secondary: "Change Data" }}
              compact
            />
            <div className="dm-right-stack">
              <MiniStatusCard
                title="Project by Status"
                segments={[
                  { value: 45, color: colors.teal },
                  { value: 25, color: colors.red },
                  { value: 20, color: colors.blue },
                  { value: 10, color: colors.gray },
                ]}
                sideLabel="Budget Remaining"
                sideValue="$35,000.00"
              />
              <PropertyCard
                properties={[
                  { name: "All", checked: true },
                  { name: "River Apartments", checked: true },
                  { name: "Banner Lofts", checked: true },
                  { name: "Example Apartments - Partner 1", checked: true },
                  { name: "Example Apartments", checked: true },
                ]}
                searchPlaceholder="Search Properties"
              />
            </div>
          </div>
        );

      case "financial-forecasting":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact dm-forecast-card">
              <h3 className="dm-card-title">Cash Flow Forecast</h3>
              <div className="dm-forecast-chart">
                <div className="dm-bar-chart">
                  {[65, 45, 80, 55, 70, 90, 60].map((height, i) => (
                    <div key={i} className="dm-bar-wrapper">
                      <div className="dm-bar" style={{ height: `${height}%`, backgroundColor: colors.blue }} />
                      <span className="dm-bar-label">{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="dm-forecast-legend">
                <span className="dm-legend-item"><span className="dm-legend-dot" style={{ backgroundColor: colors.blue }} /> Projected</span>
                <span className="dm-legend-item"><span className="dm-legend-dot" style={{ backgroundColor: colors.green }} /> Actual</span>
              </div>
            </div>
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Capital Summary</h3>
              <div className="dm-summary-grid">
                <MetricCard label="Total Budget" value="$2.4M" />
                <MetricCard label="Committed" value="$1.8M" />
                <MetricCard label="Remaining" value="$620K" trend="8%" trendUp={false} />
                <MetricCard label="Forecast Variance" value="-$45K" />
              </div>
            </div>
          </div>
        );

      case "project-timeline":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact dm-timeline-card">
              <h3 className="dm-card-title">Project Schedule</h3>
              <Timeline
                items={[
                  { date: "Jan 15", title: "Permit Approved", status: "completed" },
                  { date: "Feb 1", title: "Demolition Complete", status: "completed" },
                  { date: "Mar 10", title: "Framing Inspection", status: "in-progress" },
                  { date: "Apr 5", title: "MEP Rough-in", status: "upcoming" },
                  { date: "May 20", title: "Final Inspection", status: "upcoming" },
                ]}
              />
            </div>
            <div className="dm-right-stack">
              <ProjectCard
                title="Unit 204 Renovation"
                status="on-track"
                progress={72}
                budget="$45,000"
                spent="$32,400"
                dueDate="Mar 15"
                compact
              />
              <ProjectCard
                title="Lobby Modernization"
                status="at-risk"
                progress={45}
                budget="$120,000"
                spent="$68,000"
                dueDate="Apr 1"
                compact
              />
            </div>
          </div>
        );

      case "project-status":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Recent Activity</h3>
              <div className="dm-activity-list">
                <div className="dm-activity-item">
                  <span className="dm-activity-icon" style={{ backgroundColor: colors.green }}>✓</span>
                  <div className="dm-activity-content">
                    <span className="dm-activity-title">Invoice #1234 Approved</span>
                    <span className="dm-activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="dm-activity-item">
                  <span className="dm-activity-icon" style={{ backgroundColor: colors.blue }}>📄</span>
                  <div className="dm-activity-content">
                    <span className="dm-activity-title">Contract uploaded</span>
                    <span className="dm-activity-time">4 hours ago</span>
                  </div>
                </div>
                <div className="dm-activity-item">
                  <span className="dm-activity-icon" style={{ backgroundColor: colors.orange }}>⚠</span>
                  <div className="dm-activity-content">
                    <span className="dm-activity-title">Budget threshold alert</span>
                    <span className="dm-activity-time">Yesterday</span>
                  </div>
                </div>
              </div>
            </div>
            <MiniStatusCard
              title="Projects by Status"
              segments={[
                { value: 12, color: colors.green },
                { value: 5, color: colors.orange },
                { value: 2, color: colors.red },
                { value: 8, color: colors.blue },
              ]}
              sideLabel="Active"
              sideValue="27"
            />
          </div>
        );

      case "multifamily-portfolio":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Portfolio Overview</h3>
              <div className="dm-portfolio-stats">
                <MetricCard label="Total Units" value="12,450" />
                <MetricCard label="Active Projects" value="47" />
                <MetricCard label="Total CapEx" value="$8.2M" />
                <MetricCard label="Avg Turn Time" value="14 days" trend="2 days" trendUp={true} />
              </div>
            </div>
            <div className="dm-right-stack">
              <MiniStatusCard
                title="Units by Renovation Status"
                segments={[
                  { value: 156, color: colors.green },
                  { value: 42, color: colors.blue },
                  { value: 28, color: colors.orange },
                ]}
                sideLabel="In Progress"
                sideValue="226"
              />
              <PropertyCard
                properties={[
                  { name: "Riverside Commons", checked: true },
                  { name: "Oak Park Village", checked: true },
                  { name: "Metro Heights", checked: true },
                  { name: "Sunset Gardens", checked: false },
                ]}
                searchPlaceholder="Search Properties"
              />
            </div>
          </div>
        );

      case "commercial-overview":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <BudgetCard
              title="CapEx by Asset Class"
              remainingLabel="Total Allocated"
              remainingValue="$24.5M"
              items={[
                { label: "Office", value: 12500000, max: 25000000, color: colors.blue },
                { label: "Retail", value: 6200000, max: 25000000, color: colors.teal },
                { label: "Industrial", value: 4100000, max: 25000000, color: colors.orange },
                { label: "Mixed-Use", value: 1700000, max: 25000000, color: colors.purple },
              ]}
              compact
            />
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">TI Allowance Tracker</h3>
              <div className="dm-ti-list">
                <div className="dm-ti-item">
                  <div className="dm-ti-header">
                    <span className="dm-ti-tenant">Acme Corp</span>
                    <span className="dm-ti-floor">Floor 12</span>
                  </div>
                  <div className="dm-progress-track">
                    <div className="dm-progress-fill" style={{ width: "65%", backgroundColor: colors.blue }} />
                  </div>
                  <div className="dm-ti-amounts">
                    <span>$195K / $300K</span>
                    <span className="dm-ti-remaining">$105K remaining</span>
                  </div>
                </div>
                <div className="dm-ti-item">
                  <div className="dm-ti-header">
                    <span className="dm-ti-tenant">TechStart Inc</span>
                    <span className="dm-ti-floor">Floor 8</span>
                  </div>
                  <div className="dm-progress-track">
                    <div className="dm-progress-fill" style={{ width: "85%", backgroundColor: colors.orange }} />
                  </div>
                  <div className="dm-ti-amounts">
                    <span>$170K / $200K</span>
                    <span className="dm-ti-remaining">$30K remaining</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "developers-draw":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Draw Request #7</h3>
              <div className="dm-draw-status">
                <span className="dm-status-badge" style={{ backgroundColor: `${colors.orange}20`, color: colors.orange }}>
                  Pending Review
                </span>
              </div>
              <div className="dm-draw-details">
                <div className="dm-draw-row">
                  <span className="dm-draw-label">Request Amount</span>
                  <span className="dm-draw-value">$1,250,000</span>
                </div>
                <div className="dm-draw-row">
                  <span className="dm-draw-label">Retainage Held</span>
                  <span className="dm-draw-value">$125,000</span>
                </div>
                <div className="dm-draw-row">
                  <span className="dm-draw-label">Net Draw</span>
                  <span className="dm-draw-value dm-draw-net">$1,125,000</span>
                </div>
              </div>
              <div className="dm-draw-progress">
                <span className="dm-draw-label">Loan Progress</span>
                <div className="dm-progress-track">
                  <div className="dm-progress-fill" style={{ width: "62%", backgroundColor: colors.blue }} />
                </div>
                <span className="dm-draw-amounts">$18.6M / $30M drawn</span>
              </div>
            </div>
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Cost Breakdown</h3>
              <div className="dm-cost-breakdown">
                {[
                  { category: "Hard Costs", amount: "$980,000", percent: 78 },
                  { category: "Soft Costs", amount: "$145,000", percent: 12 },
                  { category: "Contingency", amount: "$75,000", percent: 6 },
                  { category: "FF&E", amount: "$50,000", percent: 4 },
                ].map((item, i) => (
                  <div key={i} className="dm-cost-row">
                    <span className="dm-cost-category">{item.category}</span>
                    <span className="dm-cost-amount">{item.amount}</span>
                    <span className="dm-cost-percent">{item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "approvals":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Pending Approvals</h3>
              <div className="dm-approval-list">
                {[
                  { type: "Invoice", amount: "$24,500", vendor: "ABC Contractors", priority: "high" },
                  { type: "Change Order", amount: "$8,200", vendor: "XYZ Plumbing", priority: "medium" },
                  { type: "Budget Transfer", amount: "$15,000", vendor: "Internal", priority: "low" },
                ].map((item, i) => (
                  <div key={i} className="dm-approval-item">
                    <div className={`dm-priority-dot priority-${item.priority}`} />
                    <div className="dm-approval-content">
                      <span className="dm-approval-type">{item.type}</span>
                      <span className="dm-approval-vendor">{item.vendor}</span>
                    </div>
                    <span className="dm-approval-amount">{item.amount}</span>
                    <div className="dm-approval-actions">
                      <button className="dm-btn-icon dm-btn-approve">✓</button>
                      <button className="dm-btn-icon dm-btn-reject">×</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Approval Workflow</h3>
              <div className="dm-workflow">
                <div className="dm-workflow-step completed">
                  <span className="dm-workflow-icon">✓</span>
                  <span className="dm-workflow-label">Submitted</span>
                </div>
                <div className="dm-workflow-line completed" />
                <div className="dm-workflow-step completed">
                  <span className="dm-workflow-icon">✓</span>
                  <span className="dm-workflow-label">PM Review</span>
                </div>
                <div className="dm-workflow-line active" />
                <div className="dm-workflow-step active">
                  <span className="dm-workflow-icon">●</span>
                  <span className="dm-workflow-label">Director</span>
                </div>
                <div className="dm-workflow-line" />
                <div className="dm-workflow-step">
                  <span className="dm-workflow-icon">○</span>
                  <span className="dm-workflow-label">Finance</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "bidding":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Bid Comparison</h3>
              <div className="dm-bid-table">
                <div className="dm-bid-header">
                  <span>Vendor</span>
                  <span>Base Bid</span>
                  <span>Timeline</span>
                  <span>Score</span>
                </div>
                {[
                  { vendor: "Premier Builders", bid: "$145,000", timeline: "45 days", score: 92 },
                  { vendor: "Quality Construction", bid: "$138,500", timeline: "52 days", score: 87 },
                  { vendor: "FastTrack Co", bid: "$152,000", timeline: "38 days", score: 84 },
                ].map((item, i) => (
                  <div key={i} className={`dm-bid-row ${i === 0 ? "recommended" : ""}`}>
                    <span className="dm-bid-vendor">{item.vendor}</span>
                    <span className="dm-bid-amount">{item.bid}</span>
                    <span>{item.timeline}</span>
                    <span className="dm-bid-score">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">RFP Status</h3>
              <div className="dm-rfp-stats">
                <MetricCard label="Sent" value="12" />
                <MetricCard label="Viewed" value="10" />
                <MetricCard label="Submitted" value="6" />
                <MetricCard label="Deadline" value="3 days" />
              </div>
            </div>
          </div>
        );

      case "vendor-management":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Top Vendors</h3>
              <div className="dm-vendor-list">
                <VendorRow name="ABC Construction" type="General Contractor" rating={5} activeProjects={8} />
                <VendorRow name="Elite Plumbing" type="Plumbing" rating={4} activeProjects={5} />
                <VendorRow name="PowerTech Electric" type="Electrical" rating={5} activeProjects={6} />
                <VendorRow name="HVAC Masters" type="HVAC" rating={4} activeProjects={3} />
              </div>
            </div>
            <MiniStatusCard
              title="Vendor Performance"
              segments={[
                { value: 72, color: colors.green },
                { value: 18, color: colors.orange },
                { value: 10, color: colors.red },
              ]}
              sideLabel="Avg Rating"
              sideValue="4.5★"
            />
          </div>
        );

      case "dev-draw-management":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <div className="dm-draw-header-row">
                <h3 className="dm-card-title">Draw Package #8</h3>
                <span className="dm-status-badge" style={{ backgroundColor: `${colors.green}20`, color: colors.green }}>
                  Ready to Submit
                </span>
              </div>
              <div className="dm-draw-summary">
                <div className="dm-draw-main-amount">
                  <span className="dm-draw-label">This Draw</span>
                  <span className="dm-draw-big-value">$1,847,500</span>
                </div>
                <div className="dm-draw-breakdown-mini">
                  <div className="dm-draw-line">
                    <span>Gross Amount</span>
                    <span>$2,052,778</span>
                  </div>
                  <div className="dm-draw-line">
                    <span>Less Retainage (10%)</span>
                    <span className="dm-text-red">-$205,278</span>
                  </div>
                  <div className="dm-draw-line dm-draw-line-bold">
                    <span>Net This Draw</span>
                    <span>$1,847,500</span>
                  </div>
                </div>
              </div>
              <div className="dm-draw-costs">
                <div className="dm-cost-line">
                  <span className="dm-cost-dot" style={{ backgroundColor: colors.blue }} />
                  <span className="dm-cost-name">Hard Costs</span>
                  <span className="dm-cost-val">$1,520,000</span>
                </div>
                <div className="dm-cost-line">
                  <span className="dm-cost-dot" style={{ backgroundColor: colors.purple }} />
                  <span className="dm-cost-name">Soft Costs</span>
                  <span className="dm-cost-val">$285,000</span>
                </div>
                <div className="dm-cost-line">
                  <span className="dm-cost-dot" style={{ backgroundColor: colors.teal }} />
                  <span className="dm-cost-name">Contingency</span>
                  <span className="dm-cost-val">$247,778</span>
                </div>
              </div>
              <button className="dm-btn dm-btn-primary dm-btn-full">Generate Draw Package</button>
            </div>
            <div className="dm-right-stack">
              <div className="dm-card dm-card-compact">
                <h3 className="dm-card-title">Loan Progress</h3>
                <div className="dm-loan-visual">
                  <div className="dm-loan-bar">
                    <div className="dm-loan-filled" style={{ width: "58%" }} />
                    <div className="dm-loan-pending" style={{ width: "8%", left: "58%" }} />
                  </div>
                  <div className="dm-loan-labels">
                    <span>$17.4M drawn</span>
                    <span>$30M total</span>
                  </div>
                </div>
                <div className="dm-loan-stats">
                  <div className="dm-loan-stat">
                    <span className="dm-loan-stat-value">7</span>
                    <span className="dm-loan-stat-label">Draws Completed</span>
                  </div>
                  <div className="dm-loan-stat">
                    <span className="dm-loan-stat-value">$12.6M</span>
                    <span className="dm-loan-stat-label">Remaining</span>
                  </div>
                </div>
              </div>
              <div className="dm-card dm-card-compact">
                <h3 className="dm-card-title">Lender Requirements</h3>
                <div className="dm-checklist">
                  <div className="dm-check-item dm-check-done">
                    <span className="dm-check-icon">✓</span>
                    <span>AIA G702/G703</span>
                  </div>
                  <div className="dm-check-item dm-check-done">
                    <span className="dm-check-icon">✓</span>
                    <span>Lien Waivers</span>
                  </div>
                  <div className="dm-check-item dm-check-done">
                    <span className="dm-check-icon">✓</span>
                    <span>Inspection Report</span>
                  </div>
                  <div className="dm-check-item dm-check-done">
                    <span className="dm-check-icon">✓</span>
                    <span>Updated Schedule</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "dev-budget-control":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Budget vs Actual</h3>
              <div className="dm-budget-header-stats">
                <div className="dm-budget-stat">
                  <span className="dm-budget-stat-label">Original Budget</span>
                  <span className="dm-budget-stat-value">$28,500,000</span>
                </div>
                <div className="dm-budget-stat">
                  <span className="dm-budget-stat-label">Current Forecast</span>
                  <span className="dm-budget-stat-value dm-text-orange">$29,125,000</span>
                </div>
                <div className="dm-budget-stat">
                  <span className="dm-budget-stat-label">Variance</span>
                  <span className="dm-budget-stat-value dm-text-red">+$625,000</span>
                </div>
              </div>
              <div className="dm-variance-bars">
                <div className="dm-variance-row">
                  <span className="dm-variance-category">Hard Costs</span>
                  <div className="dm-variance-bar-container">
                    <div className="dm-variance-bar dm-variance-budget" style={{ width: "100%" }} />
                    <div className="dm-variance-bar dm-variance-actual" style={{ width: "103%" }} />
                  </div>
                  <span className="dm-variance-amount dm-text-red">+$420K</span>
                </div>
                <div className="dm-variance-row">
                  <span className="dm-variance-category">Soft Costs</span>
                  <div className="dm-variance-bar-container">
                    <div className="dm-variance-bar dm-variance-budget" style={{ width: "100%" }} />
                    <div className="dm-variance-bar dm-variance-actual" style={{ width: "108%" }} />
                  </div>
                  <span className="dm-variance-amount dm-text-red">+$205K</span>
                </div>
                <div className="dm-variance-row">
                  <span className="dm-variance-category">Contingency</span>
                  <div className="dm-variance-bar-container">
                    <div className="dm-variance-bar dm-variance-budget" style={{ width: "100%" }} />
                    <div className="dm-variance-bar dm-variance-actual" style={{ width: "65%" }} />
                  </div>
                  <span className="dm-variance-amount dm-text-green">35% remaining</span>
                </div>
              </div>
            </div>
            <div className="dm-right-stack">
              <div className="dm-card dm-card-compact dm-alert-card">
                <h3 className="dm-card-title">
                  <span className="dm-alert-icon">⚠</span>
                  Active Alerts
                </h3>
                <div className="dm-alert-list">
                  <div className="dm-alert-item dm-alert-high">
                    <span className="dm-alert-badge">High</span>
                    <div className="dm-alert-content">
                      <span className="dm-alert-title">Concrete costs +12%</span>
                      <span className="dm-alert-detail">$180K over budget</span>
                    </div>
                  </div>
                  <div className="dm-alert-item dm-alert-medium">
                    <span className="dm-alert-badge">Med</span>
                    <div className="dm-alert-content">
                      <span className="dm-alert-title">Electrical at 95%</span>
                      <span className="dm-alert-detail">Approaching threshold</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dm-card dm-card-compact">
                <h3 className="dm-card-title">Contingency Burn</h3>
                <div className="dm-contingency-visual">
                  <DonutChart
                    segments={[
                      { value: 65, color: colors.blue },
                      { value: 35, color: colors.gray },
                    ]}
                    size={64}
                    strokeWidth={10}
                    centerValue="35%"
                  />
                  <div className="dm-contingency-detail">
                    <span className="dm-contingency-remaining">$498K remaining</span>
                    <span className="dm-contingency-total">of $1.425M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "dev-portfolio-view":
        return (
          <div className="dm-layout dm-layout-asymmetric">
            <div className="dm-card dm-card-compact">
              <h3 className="dm-card-title">Portfolio Overview</h3>
              <div className="dm-portfolio-metrics">
                <div className="dm-portfolio-metric">
                  <span className="dm-portfolio-metric-value">12</span>
                  <span className="dm-portfolio-metric-label">Active Projects</span>
                </div>
                <div className="dm-portfolio-metric">
                  <span className="dm-portfolio-metric-value">$284M</span>
                  <span className="dm-portfolio-metric-label">Total Budget</span>
                </div>
                <div className="dm-portfolio-metric">
                  <span className="dm-portfolio-metric-value">$168M</span>
                  <span className="dm-portfolio-metric-label">Drawn to Date</span>
                </div>
              </div>
              <div className="dm-portfolio-projects">
                <div className="dm-portfolio-project">
                  <div className="dm-portfolio-project-header">
                    <span className="dm-portfolio-project-name">Highland Tower</span>
                    <span className="dm-status-badge" style={{ backgroundColor: `${colors.green}20`, color: colors.green }}>On Track</span>
                  </div>
                  <div className="dm-portfolio-project-stats">
                    <span>$45M budget</span>
                    <span>68% complete</span>
                  </div>
                  <div className="dm-progress-track">
                    <div className="dm-progress-fill" style={{ width: "68%", backgroundColor: colors.green }} />
                  </div>
                </div>
                <div className="dm-portfolio-project">
                  <div className="dm-portfolio-project-header">
                    <span className="dm-portfolio-project-name">Marina District</span>
                    <span className="dm-status-badge" style={{ backgroundColor: `${colors.orange}20`, color: colors.orange }}>At Risk</span>
                  </div>
                  <div className="dm-portfolio-project-stats">
                    <span>$72M budget</span>
                    <span>42% complete</span>
                  </div>
                  <div className="dm-progress-track">
                    <div className="dm-progress-fill" style={{ width: "42%", backgroundColor: colors.orange }} />
                  </div>
                </div>
                <div className="dm-portfolio-project">
                  <div className="dm-portfolio-project-header">
                    <span className="dm-portfolio-project-name">Parkview Commons</span>
                    <span className="dm-status-badge" style={{ backgroundColor: `${colors.green}20`, color: colors.green }}>On Track</span>
                  </div>
                  <div className="dm-portfolio-project-stats">
                    <span>$38M budget</span>
                    <span>85% complete</span>
                  </div>
                  <div className="dm-progress-track">
                    <div className="dm-progress-fill" style={{ width: "85%", backgroundColor: colors.green }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="dm-right-stack">
              <div className="dm-card dm-card-compact">
                <h3 className="dm-card-title">Risk Summary</h3>
                <div className="dm-risk-summary">
                  <div className="dm-risk-item">
                    <span className="dm-risk-dot" style={{ backgroundColor: colors.green }} />
                    <span className="dm-risk-label">On Track</span>
                    <span className="dm-risk-count">8</span>
                  </div>
                  <div className="dm-risk-item">
                    <span className="dm-risk-dot" style={{ backgroundColor: colors.orange }} />
                    <span className="dm-risk-label">At Risk</span>
                    <span className="dm-risk-count">3</span>
                  </div>
                  <div className="dm-risk-item">
                    <span className="dm-risk-dot" style={{ backgroundColor: colors.red }} />
                    <span className="dm-risk-label">Over Budget</span>
                    <span className="dm-risk-count">1</span>
                  </div>
                </div>
              </div>
              <div className="dm-card dm-card-compact">
                <h3 className="dm-card-title">This Month</h3>
                <div className="dm-month-stats">
                  <div className="dm-month-stat">
                    <span className="dm-month-value">$12.4M</span>
                    <span className="dm-month-label">Draws Submitted</span>
                  </div>
                  <div className="dm-month-stat">
                    <span className="dm-month-value">$8.2M</span>
                    <span className="dm-month-label">Funded</span>
                  </div>
                  <div className="dm-month-stat">
                    <span className="dm-month-value">4</span>
                    <span className="dm-month-label">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dm-container dm-compact">
      {renderVariant()}
    </div>
  );
}
