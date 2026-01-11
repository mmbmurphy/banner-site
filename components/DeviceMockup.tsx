"use client";

interface DeviceMockupProps {
  desktopImage: string;
  mobileImage?: string;
  alt?: string;
}

export default function DeviceMockup({ desktopImage, mobileImage, alt = "Banner Dashboard" }: DeviceMockupProps) {
  return (
    <div className="device-mockup-container">
      {/* Desktop/Laptop Frame */}
      <div className="device-laptop">
        <div className="laptop-screen">
          <img src={desktopImage} alt={alt} className="laptop-screenshot" />
        </div>
        <div className="laptop-base">
          <div className="laptop-notch"></div>
        </div>
      </div>

      {/* Mobile Frame */}
      {mobileImage && (
        <div className="device-mobile">
          <div className="mobile-notch"></div>
          <div className="mobile-screen">
            <img src={mobileImage} alt={`${alt} - Mobile`} className="mobile-screenshot" />
          </div>
          <div className="mobile-home-indicator"></div>
        </div>
      )}

      <style jsx>{`
        .device-mockup-container {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 2rem;
          padding: 2rem 0;
          background: transparent;
        }

        /* Laptop Styles */
        .device-laptop {
          position: relative;
          max-width: 100%;
        }

        .laptop-screen {
          background: #1a1a1a;
          border-radius: 12px 12px 0 0;
          padding: 8px 8px 0 8px;
          border: 2px solid #333;
          border-bottom: none;
        }

        .laptop-screenshot {
          display: block;
          width: 100%;
          max-width: 600px;
          height: auto;
          border-radius: 6px 6px 0 0;
        }

        .laptop-base {
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          height: 14px;
          border-radius: 0 0 8px 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid #333;
          border-top: 1px solid #444;
        }

        .laptop-notch {
          width: 80px;
          height: 4px;
          background: #444;
          border-radius: 2px;
        }

        /* Mobile Styles */
        .device-mobile {
          position: absolute;
          right: -20px;
          bottom: 0;
          background: #1a1a1a;
          border-radius: 24px;
          padding: 8px;
          border: 2px solid #333;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .mobile-notch {
          width: 60px;
          height: 6px;
          background: #333;
          border-radius: 3px;
          margin: 4px auto 8px;
        }

        .mobile-screen {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
        }

        .mobile-screenshot {
          display: block;
          width: 140px;
          height: auto;
          min-height: 280px;
          object-fit: cover;
          object-position: top;
        }

        .mobile-home-indicator {
          width: 40px;
          height: 4px;
          background: #444;
          border-radius: 2px;
          margin: 8px auto 4px;
        }

        @media (max-width: 991px) {
          .device-mockup-container {
            flex-direction: column;
            align-items: center;
          }

          .device-mobile {
            position: relative;
            right: auto;
            bottom: auto;
            margin-top: -2rem;
          }

          .laptop-screenshot {
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .device-mobile {
            display: none;
          }

          .laptop-screen {
            padding: 4px 4px 0 4px;
          }

          .laptop-base {
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
}
