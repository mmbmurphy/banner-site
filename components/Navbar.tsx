"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const solutions = [
  {
    title: "Multifamily",
    description: "CapEx management for apartment portfolios",
    href: "/solutions/multifamily",
  },
  {
    title: "Commercial",
    description: "Streamline capital projects for office & retail",
    href: "/solutions/commercial",
  },
  {
    title: "Developers",
    description: "Track development budgets from ground-up",
    href: "/solutions/developers",
  },
];

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [pathname]);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll for sticky blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    if (!isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobile]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
      setIsMobileSolutionsOpen(false);
    }
  }, [isMobile]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    if (isMobile) return; // Disable hover on mobile
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return; // Disable hover on mobile
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  };

  return (
    <div
      data-animation="default"
      className={`nav_component w-nav ${isMobileMenuOpen ? "w--open" : ""}`}
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      role="banner"
      data-duration="400"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
        boxShadow: isScrolled ? "0 2px 20px rgba(0, 0, 0, 0.08)" : "none",
        transition: "backdrop-filter 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="nav_container">
        <Link href="/" className="navbar1_logo-link w-nav-brand" onClick={() => handleMobileMenuClose()}>
          <img
            width={134}
            height={40}
            loading="lazy"
            alt="Banner Logo"
            src="/images/Frame.png"
            className="navbar1_logo"
          />
        </Link>

        <nav
          role="navigation"
          className={`navbar1_menu is-page-height-tablet w-nav-menu ${isMobileMenuOpen ? "w--open" : ""}`}
          style={
            isMobile
              ? {
                  maxHeight: isMobileMenuOpen ? "100vh" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                  display: "block",
                  overflowY: isMobileMenuOpen ? "auto" : "hidden",
                }
              : {}
          }
        >
          <div className="navbar1_menu-links">
            {/* Desktop Mega Menu */}
            {!isMobile && (
              <div
                ref={dropdownRef}
                data-delay="200"
                data-hover="true"
                className={`navbar1_menu-dropdown w-dropdown ${isDropdownOpen ? "w--open" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="navbar1_dropdown-toggle w-dropdown-toggle"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{ cursor: "pointer" }}
                >
                  <div>Solutions</div>
                  <div className="dropdown-chevron w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
                <nav
                  className={`navbar1_dropdown-list mega-menu w-dropdown-list ${isDropdownOpen ? "w--open" : ""}`}
                  style={{
                    display: isDropdownOpen ? "block" : "none",
                    opacity: isDropdownOpen ? 1 : 0,
                    zIndex: 1001,
                  }}
                >
                  <div className="mega-menu-container">
                    <div className="mega-menu-column mega-menu-left">
                      <div className="mega-menu-section-header">WHY BANNER</div>
                      <Link
                        href="/about"
                        className="mega-menu-item"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="mega-menu-item-title">About Us</div>
                        <div className="mega-menu-item-desc">
                          Learn how Banner transforms CapEx management
                        </div>
                      </Link>
                      <Link
                        href="/contact"
                        className="mega-menu-item"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="mega-menu-item-title">Book a Demo</div>
                        <div className="mega-menu-item-desc">
                          See Banner in Action with a personalized walkthrough
                        </div>
                      </Link>
                    </div>
                    <div className="mega-menu-column mega-menu-center">
                      <div className="mega-menu-section-header">SOLUTIONS</div>
                      {solutions.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="mega-menu-item"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <div className="mega-menu-item-title">{solution.title}</div>
                          <div className="mega-menu-item-desc">{solution.description}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mega-menu-column mega-menu-right">
                      <div className="mega-menu-section-header">FEATURED</div>
                      <div className="mega-menu-featured-card">
                        <img
                          src="/images/fcp-case-study.jpg"
                          alt="FCP Case Study"
                          className="mega-menu-featured-img"
                        />
                        <div className="mega-menu-featured-title">
                          FCP gains one source of truth for CapEx
                        </div>
                        <Link
                          href="/case-studies/fcp"
                          className="mega-menu-featured-link"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Read the case study →
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            )}

            {/* Mobile Accordion Menu */}
            {isMobile && isMobileMenuOpen && (
              <div className="mobile-solutions-accordion">
                <button
                  className="mobile-solutions-toggle"
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  aria-expanded={isMobileSolutionsOpen}
                >
                  <span>Solutions</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: isMobileSolutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <div
                  className="mobile-solutions-content"
                  style={{
                    maxHeight: isMobileSolutionsOpen ? "1000px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <div className="mobile-solutions-section">
                    <div className="mobile-solutions-header">Solutions</div>
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="mobile-solutions-link"
                        onClick={handleMobileMenuClose}
                      >
                        <span className="mobile-solutions-title">{solution.title}</span>
                        <span className="mobile-solutions-desc">{solution.description}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="mobile-solutions-section">
                    <div className="mobile-solutions-header">Why Banner</div>
                    <Link
                      href="/about"
                      className="mobile-solutions-link"
                      onClick={handleMobileMenuClose}
                    >
                      <span className="mobile-solutions-title">About Us</span>
                      <span className="mobile-solutions-desc">Learn how Banner transforms CapEx management</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="mobile-solutions-link"
                      onClick={handleMobileMenuClose}
                    >
                      <span className="mobile-solutions-title">Book a Demo</span>
                      <span className="mobile-solutions-desc">See Banner in Action</span>
                    </Link>
                  </div>
                  <div className="mobile-solutions-section">
                    <div className="mobile-solutions-header">Case Studies</div>
                    <Link
                      href="/case-studies/fcp"
                      className="mobile-solutions-link"
                      onClick={handleMobileMenuClose}
                    >
                      <span className="mobile-solutions-title">FCP Case Study</span>
                      <span className="mobile-solutions-desc">One source of truth for CapEx</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            <Link
              href="/blog"
              className="navbar1_link w-nav-link"
              onClick={() => {
                handleMobileMenuClose();
              }}
            >
              Blog
            </Link>
          </div>
          <div className="navbar1_menu-buttons">
            <a
              href="https://auth.withbanner.com/login"
              className="button is-secondary is-small is-nav w-button"
              onClick={() => {
                handleMobileMenuClose();
              }}
            >
              Log in
            </a>
            <Link
              href="/contact"
              className="button is-small w-button"
              onClick={(e) => {
                handleMobileMenuClose();
              }}
            >
              Book a Demo
            </Link>
          </div>
        </nav>

        <div
          className={`navbar1_menu-button w-nav-button ${isMobileMenuOpen ? "w--open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ cursor: "pointer" }}
        >
          <div className="menu-icon1">
            <div
              className="menu-icon1_line-top"
              style={{
                transform: isMobileMenuOpen
                  ? "translate3d(0, 7px, 0) rotate(45deg)"
                  : "none",
                transition: "transform 0.3s ease",
              }}
            ></div>
            <div
              className="menu-icon1_line-middle"
              style={{
                opacity: isMobileMenuOpen ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            >
              <div className="menu-icon1_line-middle-inner"></div>
            </div>
            <div
              className="menu-icon1_line-bottom"
              style={{
                transform: isMobileMenuOpen
                  ? "translate3d(0, -7px, 0) rotate(-45deg)"
                  : "none",
                transition: "transform 0.3s ease",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
