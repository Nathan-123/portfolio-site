"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        {/* Text container for name + subtitle */}
        <div className="hero-text">
          <h1>Nathan Adams</h1>
          <p className="hero-subtitle">
            Frontend Developer and UX Enthusiast set on crafting engaging and accessible apps.
          </p>
        </div>

        {/* Hero image */}
        <div className="intro-image-wrapper">
          <Image
            src="/me2.jpg"
            alt="Nathan Adams"
            width={600}
            height={600}
            style={{ width: "100%", height: "auto" }}
            className="intro-image"
          />
        </div>
      </section>

      {/* Buttons below hero section */}
      <div className="hero-buttons">
        <Link href="/projects" className="btn">
          View My Work
        </Link>
        <Link href="/contacts" className="btn">
          Get In Touch
        </Link>
      </div>

      {/* Socials */}
      <section className="socials-grid">
        <a href="https://www.linkedin.com/in/nathan-adams-111656339/" className="social-item" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.png" alt="LinkedIn" width={60} height={60} />
        </a>
        <a href="https://www.instagram.com/thirdpart1234/" className="social-item" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram.png" alt="Instagram" width={60} height={60} />
        </a>
        <a href="/contacts" className="social-item">
          <Image src="/email.png" alt="Email" width={60} height={60} />
        </a>
      </section>

    </div>
  );
}

