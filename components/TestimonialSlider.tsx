"use client";

import { useState } from "react";

const testimonials = [
  {
    image: "/images/Drew_Gravina_-_3_u9yqfa.webp",
    quote:
      "Banner completely changed how we manage bidding and contracting. Automating our RFP workflow now saves us over $900,000 every year, and the accuracy and transparency we get across vendors is unlike anything we've had before. As an operations leader, Banner is a game-changer.",
    name: "Drew Gravina",
    position: "SVP Facilities Operations at Morgan Properties",
  },
  {
    image: "/images/Jon-Jacobs---Tourmaline.jpeg",
    quote:
      "If our prior software made 4 things easier, it made 4 things harder - Banner is our ideal system.",
    name: "Jon Jacobs",
    position: "Managing Principal, COO at Tourmaline",
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section_testimonial7">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="margin-bottom margin-xlarge">
              <div className="text-align-center">
                <h2 className="heading-style-h2 text-color-white">Hear it from your peers</h2>
              </div>
            </div>
            <div className="testimonial7_component">
              <div className="testimonial7_slider" style={{ position: "relative" }}>
                <div className="testimonial7_mask">
                  <div className="testimonial7_slide">
                    <div className="testimonial7_content">
                      <div className="testimonial7_client-image-wrapper">
                        <img
                          src={testimonials[currentSlide].image}
                          loading="lazy"
                          alt={testimonials[currentSlide].name}
                          className="t-image"
                        />
                      </div>
                      <div className="testimonial-text-wrapp">
                        <div className="testimonial-text">
                          <img src="/images/_.png" loading="lazy" alt="" className="image-2" />
                          <p className="paragraph">{testimonials[currentSlide].quote}</p>
                        </div>
                        <div className="testimonial-divider"></div>
                        <div className="testimonial-client-info">
                          <div className="testimonial-client-name">
                            {testimonials[currentSlide].name}
                          </div>
                          <div className="testimonial-client-position">
                            {testimonials[currentSlide].position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slider-arrow is-centre-previous w-slider-arrow-left"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  style={{ cursor: "pointer", background: "none", border: "none" }}
                >
                  <div className="slider-arrow-icon_default w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>
                <button
                  className="slider-arrow is-centre-next w-slider-arrow-right"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  style={{ cursor: "pointer", background: "none", border: "none" }}
                >
                  <div className="slider-arrow-icon_default w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="slider-bottom">
                <div className="slider-line-bg">
                  <div
                    className="slider-line-fill"
                    style={{
                      width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
                      transition: "width 0.3s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
