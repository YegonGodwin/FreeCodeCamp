//import React, { useState } from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed"; // For autotyping effect
import "./HeroSection.css"; // Custom styles
const HeroSection: React.FC = () => {
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Goalix Scores
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/news">
            News
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/scores">
            Scores
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/fixtures">
            Fixtures
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/transfers">
            Transfers
          </Link>
        </li>
      </ul>
    </div>
  </nav>;
  useEffect(() => {
    // Ensure video plays automatically if needed
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      video.play().catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <div className="hero-section">
      <video
        id="hero-video"
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
      >
        <source src="/football-highlight.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1 className="hero-title">
          <Typed
            strings={[
              "Welcome to Goalix Scores",
              "Your Football Hub",
              "Live Scores & More",
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={2000}
            loop
          />
        </h1>
        <p className="hero-subtitle">
          Catch the latest news, scores, and fixtures!
        </p>
        <a href="/fixtures" className="btn btn-primary hero-button">
          Next Big Match
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
