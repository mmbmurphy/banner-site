"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingDocument from "./FloatingDocument";
import DashboardReveal from "./DashboardReveal";
import {
  floatingElements,
  depthConfig,
  getResponsiveElements,
  type FloatingElementConfig,
} from "./floatingElements";

// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ChaosToOrderHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const idleAnimationsRef = useRef<gsap.core.Tween[]>([]);
  const [elements, setElements] = useState<FloatingElementConfig[]>(floatingElements);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateElements = () => {
      const width = window.innerWidth;
      setElements(getResponsiveElements(width));
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener("change", handleMotionChange);

    updateElements();
    window.addEventListener("resize", updateElements);

    return () => {
      window.removeEventListener("resize", updateElements);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [isClient]);

  // Idle floating animation
  const startIdleAnimations = useCallback(() => {
    if (prefersReducedMotion) return;

    const elementNodes = gsap.utils.toArray<HTMLElement>(".floating-element");

    elementNodes.forEach((el, index) => {
      const config = elements[index];
      if (!config) return;

      const depth = depthConfig[config.depth as keyof typeof depthConfig];

      const tween = gsap.to(el, {
        y: `+=${depth.idleAmplitude}`,
        x: `+=${depth.idleAmplitude * 0.3}`,
        rotation: `+=${3 + config.depth * 2}`,
        duration: depth.idleDuration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: config.idleOffset * depth.idleDuration,
      });

      idleAnimationsRef.current.push(tween);
    });
  }, [elements, prefersReducedMotion]);

  // Main scroll animation
  useEffect(() => {
    if (!isClient || !containerRef.current || !dashboardRef.current) return;

    if (prefersReducedMotion) {
      gsap.set(".floating-element", { opacity: 0 });
      gsap.set(dashboardRef.current, { scale: 1, opacity: 1 });
      gsap.set(taglineRef.current, { opacity: 1 });
      return;
    }

    startIdleAnimations();

    const ctx = gsap.context(() => {
      // Get the dashboard's center position - this is where documents will converge TO
      const dashboardEl = dashboardRef.current;
      if (!dashboardEl) return;

      const containerRect = containerRef.current!.getBoundingClientRect();

      // Dashboard center point (where everything converges)
      // Dashboard is centered horizontally and at 45% from top (lower on page for breathing room)
      const convergeCenterX = containerRect.width / 2;
      const convergeCenterY = containerRect.height * 0.45;

      // Master timeline - 400vh scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400vh",
          pin: true,
          scrub: 2.5,
          anticipatePin: 1,
          onEnter: () => {
            idleAnimationsRef.current.forEach(tween => {
              gsap.to(tween, { timeScale: 0.15, duration: 1 });
            });
          },
          onLeaveBack: () => {
            idleAnimationsRef.current.forEach(tween => {
              gsap.to(tween, { timeScale: 1, duration: 0.5 });
            });
          },
        },
      });

      const elementNodes = gsap.utils.toArray<HTMLElement>(".floating-element");

      // ============================================
      // PHASE 1: Documents spiral slowly toward dashboard center (0% - 60%)
      // ============================================
      elementNodes.forEach((el, index) => {
        const config = elements[index];
        if (!config) return;

        const depth = depthConfig[config.depth as keyof typeof depthConfig];

        const rect = el.getBoundingClientRect();
        const elCenterX = rect.left - containerRect.left + rect.width / 2;
        const elCenterY = rect.top - containerRect.top + rect.height / 2;

        // Target: converge to EXACT dashboard center (no spread - all go to same point)
        const targetX = convergeCenterX - elCenterX;
        const targetY = convergeCenterY - elCenterY;

        // Spiral direction based on starting position
        const isRightSide = elCenterX > convergeCenterX;
        const isBottomHalf = elCenterY > convergeCenterY;
        const spiralDir = (isRightSide === isBottomHalf) ? 1 : -1;

        // Calculate spiral intensity based on distance
        const distance = Math.sqrt(
          Math.pow(elCenterX - convergeCenterX, 2) +
          Math.pow(elCenterY - convergeCenterY, 2)
        );
        const rotations = 360 * (1 + distance / 500) * spiralDir;

        // Control points for smooth curved path
        const perpAngle = Math.atan2(targetY, targetX) + (Math.PI / 2) * spiralDir;
        const curveStrength = distance * 0.4 * depth.parallaxSpeed;

        const cp1X = targetX * 0.25 + Math.cos(perpAngle) * curveStrength;
        const cp1Y = targetY * 0.25 + Math.sin(perpAngle) * curveStrength;
        const cp2X = targetX * 0.55 + Math.cos(perpAngle) * curveStrength * 0.7;
        const cp2Y = targetY * 0.55 + Math.sin(perpAngle) * curveStrength * 0.7;
        const cp3X = targetX * 0.8 + Math.cos(perpAngle) * curveStrength * 0.3;
        const cp3Y = targetY * 0.8 + Math.sin(perpAngle) * curveStrength * 0.3;

        // Stagger based on depth and position
        const startDelay = config.delay * 0.06;

        // Slow, graceful spiral inward
        tl.to(
          el,
          {
            keyframes: [
              {
                x: cp1X,
                y: cp1Y,
                rotation: `+=${rotations * 0.2}`,
                scale: 0.85,
                ease: "power1.out",
              },
              {
                x: cp2X,
                y: cp2Y,
                rotation: `+=${rotations * 0.45}`,
                scale: 0.65,
                ease: "sine.inOut",
              },
              {
                x: cp3X,
                y: cp3Y,
                rotation: `+=${rotations * 0.75}`,
                scale: 0.45,
                ease: "sine.inOut",
              },
              {
                x: targetX,
                y: targetY,
                rotation: `+=${rotations}`,
                scale: 0.15,
                ease: "power2.in",
              },
            ],
            duration: 0.6,
          },
          startDelay
        );
      });

      // ============================================
      // PHASE 2: Header fades, documents shrink INTO dashboard (40% - 85%)
      // ============================================

      // Header fades out as documents start converging
      tl.to(
        headerRef.current,
        {
          opacity: 0,
          y: -30,
          ease: "power2.in",
          duration: 0.2,
        },
        0.35
      );

      // Documents shrink to a point and fade rapidly as dashboard emerges
      tl.to(
        ".floating-element",
        {
          scale: 0.02,
          opacity: 0,
          ease: "power4.in",
          duration: 0.18,
          stagger: {
            each: 0.004,
            from: "center",
          },
        },
        0.58
      );

      // Dashboard emerges FROM the convergence point - expanding outward
      tl.fromTo(
        dashboardRef.current,
        {
          scale: 0.05,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          duration: 0.32,
        },
        0.60
      );

      // ============================================
      // PHASE 3: Tagline fades in below dashboard (88% - 100%)
      // ============================================
      tl.fromTo(
        taglineRef.current,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.12,
        },
        0.88
      );

    }, containerRef);

    return () => {
      idleAnimationsRef.current.forEach(tween => tween.kill());
      idleAnimationsRef.current = [];
      ctx.revert();
    };
  }, [elements, prefersReducedMotion, isClient, startIdleAnimations]);

  if (!isClient) {
    return (
      <section className="chaos-hero-section">
        <div style={{ height: "100vh", background: "#f8fafc" }} />
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="chaos-hero-section">
      {/* Animation Container - includes header */}
      <div ref={containerRef} className="chaos-animation-container">
        <div className="hero-background" />

        {/* Floating elements layer - behind header */}
        <div ref={elementsContainerRef} className="elements-layer">
          {elements.map((config) => {
            const depth = depthConfig[config.depth as keyof typeof depthConfig];
            return (
              <div
                key={config.id}
                className="floating-element"
                data-type={config.type}
                style={{
                  position: "absolute",
                  left: `${config.x}%`,
                  top: `${config.y}%`,
                  transform: `rotate(${config.rotation}deg)`,
                  opacity: depth.opacity,
                  zIndex: config.depth,
                }}
              >
                <FloatingDocument type={config.type} size={config.size} />
              </div>
            );
          })}
        </div>

        {/* Header - on top of floating elements */}
        <header ref={headerRef} className="hero-header">
          <div className="padding-global">
            <div className="spacer-large"></div>
            <div className="container-large">
              <div className="header62_component">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1 className="heading-style-h1 text-wrap-balance">
                        Where Real Estate Owners and Operators Manage CapEx
                      </h1>
                    </div>
                    <p className="text-size-medium">
                      Banner replaces spreadsheets and email with one platform that links
                      long-term plans, annual budgets, and day-to-day execution across the
                      entire CapEx lifecycle.
                    </p>
                    <div className="margin-top margin-medium">
                      <div className="button-group is-center">
                        <Link href="/contact" className="button w-button">
                          Book a demo
                        </Link>
                        <a href="#how-it-works" className="button is-secondary w-button">
                          See how it works
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-medium"></div>
          </div>
        </header>

        {/* Dashboard - positioned at convergence point */}
        <div className="dashboard-wrapper">
          <DashboardReveal ref={dashboardRef} />
        </div>

        {/* Tagline below dashboard */}
        <div ref={taglineRef} className="chaos-tagline">
          <p>
            Banner kills messy CapEx processes across<br />
            <span className="highlight">Excel</span>, <span className="highlight">email</span> and <span className="highlight">shared folders</span>
          </p>
        </div>
      </div>

      {/* Scroll spacer */}
      <div className="scroll-spacer" />

      <style jsx>{`
        .chaos-hero-section {
          position: relative;
          width: 100%;
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
        }

        .hero-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: transparent;
        }

        .chaos-animation-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 50% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 60%),
            radial-gradient(ellipse at 30% 70%, rgba(236, 72, 153, 0.03) 0%, transparent 50%),
            linear-gradient(180deg, transparent 0%, rgba(241, 245, 249, 0.5) 100%);
          z-index: 0;
        }

        .elements-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .dashboard-wrapper {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 920px;
          z-index: 10;
        }

        .chaos-tagline {
          position: absolute;
          top: 80%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          z-index: 15;
          opacity: 0;
          width: 90%;
          max-width: 650px;
        }

        .chaos-tagline p {
          font-size: clamp(1rem, 2.2vw, 1.35rem);
          font-weight: 500;
          color: #475569;
          line-height: 1.7;
          margin: 0;
        }

        .chaos-tagline .highlight {
          color: #2563eb;
          font-weight: 600;
        }

        .scroll-spacer {
          height: 400vh;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .dashboard-wrapper {
            top: 42%;
            width: 95%;
          }

          .chaos-tagline {
            top: 78%;
          }

          .chaos-tagline p {
            font-size: 1rem;
            padding: 0 0.5rem;
          }

          :global(.floating-element) {
            transform: scale(0.7) !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .elements-layer {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
