"use client";

import AnimatedCounter from "./AnimatedCounter";

const metrics = [
  { value: 5, suffix: "%", label: "Avg CapEx Cost Reduction" },
  { value: 70, suffix: "%", label: "Less Admin Work" },
  { value: 2, suffix: "B+", prefix: "$", label: "CapEx Managed" },
  { value: 50, suffix: "K+", label: "Properties on Platform" },
];

export default function MetricsBar() {
  return (
    <div className="metrics-bar">
      <div className="metrics-bar-inner">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-item">
            <div className="metric-value">
              {metric.prefix && <span>{metric.prefix}</span>}
              <AnimatedCounter end={metric.value} suffix={metric.suffix} duration={2000} />
            </div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .metrics-bar {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          padding: 2rem 0;
          margin-top: -1px;
        }
        .metrics-bar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .metric-item {
          text-align: center;
        }
        .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }
        .metric-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 0.5rem;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .metrics-bar-inner {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .metric-value {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          .metrics-bar-inner {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .metric-value {
            font-size: 1.75rem;
          }
          .metric-label {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
