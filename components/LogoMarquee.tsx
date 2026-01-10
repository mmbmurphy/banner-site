"use client";

interface Logo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
  speed?: number;
}

export default function LogoMarquee({ logos, speed = 30 }: LogoMarqueeProps) {
  // Double the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="logo-marquee-container">
      <div
        className="logo-marquee-track"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-marquee-item">
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="logo6_logo"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .logo-marquee-container {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .logo-marquee-track {
          display: flex;
          gap: 3rem;
          width: fit-content;
          animation: marquee linear infinite;
        }

        .logo-marquee-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-marquee-container:hover .logo-marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
