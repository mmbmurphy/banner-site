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
          <div className="screen-glare"></div>
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
          animation: floatIn 0.8s ease-out;
        }

        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Laptop Styles */
        .device-laptop {
          position: relative;
          max-width: 100%;
          animation: float 6s ease-in-out infinite;
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25));
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .laptop-screen {
          background: #1a1a1a;
          border-radius: 16px 16px 0 0;
          padding: 12px 12px 0 12px;
          border: 3px solid #333;
          border-bottom: none;
          position: relative;
          overflow: hidden;
        }

        .screen-glare {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
          border-radius: 12px 12px 0 0;
        }

        .laptop-screenshot {
          display: block;
          width: 100%;
          max-width: 900px;
          height: auto;
          border-radius: 8px 8px 0 0;
          position: relative;
        }

        .laptop-base {
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          height: 18px;
          border-radius: 0 0 12px 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px solid #333;
          border-top: 1px solid #444;
        }

        .laptop-notch {
          width: 100px;
          height: 5px;
          background: #444;
          border-radius: 3px;
        }

        /* Mobile Styles */
        .device-mobile {
          position: absolute;
          right: -30px;
          bottom: 20px;
          background: #1a1a1a;
          border-radius: 28px;
          padding: 10px;
          border: 3px solid #333;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          animation: floatMobile 6s ease-in-out infinite;
          animation-delay: -3s;
        }

        @keyframes floatMobile {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .mobile-notch {
          width: 70px;
          height: 7px;
          background: #333;
          border-radius: 4px;
          margin: 5px auto 10px;
        }

        .mobile-screen {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
        }

        .mobile-screenshot {
          display: block;
          width: 170px;
          height: auto;
          min-height: 340px;
          object-fit: cover;
          object-position: top;
        }

        .mobile-home-indicator {
          width: 50px;
          height: 5px;
          background: #444;
          border-radius: 3px;
          margin: 10px auto 5px;
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
            padding: 6px 6px 0 6px;
            border-radius: 12px 12px 0 0;
          }

          .laptop-base {
            height: 12px;
            border-radius: 0 0 8px 8px;
          }

          .device-laptop {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
