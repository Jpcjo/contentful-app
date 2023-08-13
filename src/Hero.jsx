import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Yuccie organic vaporware poke, big mood man braid vexillologist. +1
            paleo tumblr shabby chic roof party, tacos ugh sriracha asymmetrical
            whatever heirloom. Squid keffiyeh raclette etsy plaid seitan. Lomo
            mumblecore YOLO selvage bruh, shoreditch portland wayfarers pickled
            hammock deep v.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
