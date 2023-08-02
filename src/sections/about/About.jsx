import React from "react";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";
import AboutImage from "../../assets/about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being
            in the web development industry for over 3 years and serving more
            than 70 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <a href={CV} download className="btn primary">
            Download CV {HiDownload}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
