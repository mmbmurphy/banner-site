"use client";

import { forwardRef } from "react";

type DocumentType = "spreadsheet" | "email" | "folder" | "chart" | "invoice" | "calendar";

interface FloatingDocumentProps {
  type: DocumentType;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const FloatingDocument = forwardRef<HTMLDivElement, FloatingDocumentProps>(
  ({ type, size = "md", color }, ref) => {
    const sizeMap = {
      sm: { width: 60, height: 72 },
      md: { width: 80, height: 96 },
      lg: { width: 100, height: 120 },
    };

    const { width, height } = sizeMap[size];

    const renderDocument = () => {
      switch (type) {
        case "spreadsheet":
          return (
            <div className="doc spreadsheet" style={{ width, height }}>
              <div className="doc-header">
                <div className="dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
              </div>
              <div className="doc-body">
                <div className="grid">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="cell"
                      style={{
                        background: i % 4 === 0 ? '#e2e8f0' : i % 3 === 0 ? '#dbeafe' : '#f1f5f9',
                        opacity: 0.6 + Math.random() * 0.4
                      }}
                    />
                  ))}
                </div>
              </div>
              <style jsx>{`
                .spreadsheet {
                  background: #ffffff;
                  border-radius: 6px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
                  overflow: hidden;
                  border: 1px solid rgba(0, 0, 0, 0.08);
                }
                .doc-header {
                  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                  padding: 6px 8px;
                  border-bottom: 1px solid #e2e8f0;
                }
                .dots {
                  display: flex;
                  gap: 4px;
                }
                .dot {
                  width: 6px;
                  height: 6px;
                  border-radius: 50%;
                }
                .dot.red { background: #ef4444; }
                .dot.yellow { background: #f59e0b; }
                .dot.green { background: #22c55e; }
                .doc-body {
                  padding: 8px;
                  background: #fff;
                }
                .grid {
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 3px;
                }
                .cell {
                  height: ${height * 0.12}px;
                  border-radius: 2px;
                }
              `}</style>
            </div>
          );

        case "email":
          return (
            <div className="doc email" style={{ width, height }}>
              <div className="email-header">
                <div className="avatar" />
                <div className="lines">
                  <div className="line short" />
                  <div className="line" />
                </div>
              </div>
              <div className="email-body">
                <div className="line" />
                <div className="line" />
                <div className="line medium" />
                <div className="line short" />
              </div>
              <style jsx>{`
                .email {
                  background: #ffffff;
                  border-radius: 6px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
                  overflow: hidden;
                  border: 1px solid rgba(0, 0, 0, 0.08);
                  padding: 10px;
                }
                .email-header {
                  display: flex;
                  gap: 8px;
                  margin-bottom: 10px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e2e8f0;
                }
                .avatar {
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                  flex-shrink: 0;
                }
                .lines {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  gap: 4px;
                  justify-content: center;
                }
                .email-body {
                  display: flex;
                  flex-direction: column;
                  gap: 6px;
                }
                .line {
                  height: 6px;
                  background: #e2e8f0;
                  border-radius: 3px;
                  width: 100%;
                }
                .line.short { width: 40%; }
                .line.medium { width: 70%; }
              `}</style>
            </div>
          );

        case "folder":
          return (
            <div className="doc folder" style={{ width, height: height * 0.7 }}>
              <div className="folder-tab" />
              <div className="folder-body">
                <div className="files">
                  <div className="file" />
                  <div className="file" />
                  <div className="file" />
                </div>
              </div>
              <style jsx>{`
                .folder {
                  position: relative;
                }
                .folder-tab {
                  position: absolute;
                  top: 0;
                  left: 10%;
                  width: 35%;
                  height: 12px;
                  background: linear-gradient(180deg, #fbbf24 0%, #f59e0b 100%);
                  border-radius: 4px 4px 0 0;
                }
                .folder-body {
                  position: absolute;
                  top: 8px;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: linear-gradient(180deg, #fcd34d 0%, #fbbf24 100%);
                  border-radius: 0 6px 6px 6px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
                  padding: 12px 8px 8px;
                }
                .files {
                  display: flex;
                  flex-direction: column;
                  gap: 4px;
                }
                .file {
                  height: 8px;
                  background: rgba(255, 255, 255, 0.6);
                  border-radius: 2px;
                }
              `}</style>
            </div>
          );

        case "chart":
          return (
            <div className="doc chart" style={{ width, height }}>
              <div className="doc-header">
                <div className="title-line" />
              </div>
              <div className="chart-body">
                <div className="bars">
                  {[65, 40, 85, 55, 70].map((h, i) => (
                    <div
                      key={i}
                      className="bar"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <style jsx>{`
                .chart {
                  background: #ffffff;
                  border-radius: 6px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
                  overflow: hidden;
                  border: 1px solid rgba(0, 0, 0, 0.08);
                }
                .doc-header {
                  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
                  padding: 8px 10px;
                  border-bottom: 1px solid #e2e8f0;
                }
                .title-line {
                  height: 6px;
                  width: 50%;
                  background: #cbd5e1;
                  border-radius: 3px;
                }
                .chart-body {
                  padding: 12px;
                  height: calc(100% - 32px);
                }
                .bars {
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between;
                  height: 100%;
                  gap: 6px;
                }
                .bar {
                  flex: 1;
                  background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
                  border-radius: 3px 3px 0 0;
                }
              `}</style>
            </div>
          );

        case "invoice":
          return (
            <div className="doc invoice" style={{ width, height }}>
              <div className="invoice-header">
                <div className="logo" />
                <div className="amount" />
              </div>
              <div className="invoice-body">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="row">
                    <div className="label" />
                    <div className="value" />
                  </div>
                ))}
              </div>
              <div className="invoice-footer">
                <div className="total" />
              </div>
              <style jsx>{`
                .invoice {
                  background: #ffffff;
                  border-radius: 6px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
                  overflow: hidden;
                  border: 1px solid rgba(0, 0, 0, 0.08);
                  padding: 10px;
                  display: flex;
                  flex-direction: column;
                }
                .invoice-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  margin-bottom: 10px;
                  padding-bottom: 8px;
                  border-bottom: 1px solid #e2e8f0;
                }
                .logo {
                  width: 20px;
                  height: 20px;
                  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                  border-radius: 4px;
                }
                .amount {
                  width: 30%;
                  height: 10px;
                  background: #10b981;
                  border-radius: 3px;
                }
                .invoice-body {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  gap: 6px;
                }
                .row {
                  display: flex;
                  justify-content: space-between;
                  gap: 8px;
                }
                .label {
                  height: 5px;
                  width: 40%;
                  background: #e2e8f0;
                  border-radius: 2px;
                }
                .value {
                  height: 5px;
                  width: 25%;
                  background: #cbd5e1;
                  border-radius: 2px;
                }
                .invoice-footer {
                  margin-top: 8px;
                  padding-top: 8px;
                  border-top: 1px solid #e2e8f0;
                }
                .total {
                  height: 8px;
                  width: 50%;
                  margin-left: auto;
                  background: #1e293b;
                  border-radius: 3px;
                }
              `}</style>
            </div>
          );

        case "calendar":
          return (
            <div className="doc calendar" style={{ width, height }}>
              <div className="cal-header">
                <div className="month" />
              </div>
              <div className="cal-grid">
                {[...Array(21)].map((_, i) => (
                  <div
                    key={i}
                    className={`day ${i === 8 || i === 12 ? 'highlight' : ''}`}
                  />
                ))}
              </div>
              <style jsx>{`
                .calendar {
                  background: #ffffff;
                  border-radius: 6px;
                  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
                  overflow: hidden;
                  border: 1px solid rgba(0, 0, 0, 0.08);
                }
                .cal-header {
                  background: linear-gradient(180deg, #ef4444 0%, #dc2626 100%);
                  padding: 8px;
                }
                .month {
                  height: 6px;
                  width: 50%;
                  background: rgba(255, 255, 255, 0.8);
                  border-radius: 3px;
                }
                .cal-grid {
                  display: grid;
                  grid-template-columns: repeat(7, 1fr);
                  gap: 2px;
                  padding: 8px;
                }
                .day {
                  aspect-ratio: 1;
                  background: #f1f5f9;
                  border-radius: 2px;
                }
                .day.highlight {
                  background: #3b82f6;
                }
              `}</style>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div
        ref={ref}
        className="floating-document"
        style={{
          willChange: "transform, opacity",
          pointerEvents: "none",
        }}
      >
        {renderDocument()}
      </div>
    );
  }
);

FloatingDocument.displayName = "FloatingDocument";
export default FloatingDocument;
