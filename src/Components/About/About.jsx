import React, { useEffect } from 'react';
import './About.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '#about',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '#education',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#education',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.contact',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.skill',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.skill',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div id="abt">
      <div id="about">
        <center>
          <h2>About Me</h2>
        </center>
        <h5>Profile</h5>
        <p>
          My name is <span>Sahil Patel</span>, <br /> <br />
          My web development journey is a dynamic adventure of continual learning
          and growth. Proficient in HTML, CSS, and JavaScript, I've ventured
          into modern frameworks like React, honing my craft in crafting
          responsive, interactive web applications.
          <br /> <br /> What sets me apart is not only my technical acumen but
          also my creative vision and meticulous attention to detail. I
          prioritize blending elegant design with robust functionality to deliver
          seamless user experiences that leave a lasting impression.
        </p>
      </div>

      <div id="education">
        <h5>Education</h5>
        <div className="mca">
          <h4 className="master">
            Master of Computer Science & Application (MCA)
            <br />
            Dr. Hari Singh Gour University,Sagar(M.P.) <br />
            2021-2023 <br /> <span>CGPA : 7.8</span>
          </h4>
          <h4>
            Bachelor of Computer Science & Application (BCA)
            <br />
            Dr. Hari Singh Gour University,Sagar(M.P.) <br />
            2018-2021 <br /> <span>CGPA : 6.8</span>
          </h4>
        </div>
      </div>

      <div className="contact">
        <h5>Contact</h5>
        <div id="details">
          <h3>
            <span>Name</span> : Sahil Patel
          </h3>
          <h3>
            <span>Mobile N.</span> : 8435893431
          </h3>
          <h3>
            <span>Email</span> : sahil2000.sp@gmail.com
          </h3>
          <h3>
            <span>Address</span> : Indore , Madhya Pradesh</h3>
          <h3>
            <span>GitHub</span> : <a href="https://github.com/SahiLP25" target="_blank">SahiLP25</a>
          </h3>
          <h3>
            <span>LinkedIn</span> : <a href="https://www.linkedin.com/in/sahil-patel25/" target="_blank">sahil-patel25</a>
          </h3>
        </div>
      </div>

      <div id="new" className="skill">
        <h5>Skills</h5>
        <div id="skills">
          <div className="pl">
            <h3>Web Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="fw">
            <h3>Frameworks & Libraries</h3>
            <ul>
              <li>React.Js</li>
              <li>Next.Js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>GSAP</li>
      
            </ul>
          </div>
          <div className="ft">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </div>
          <div className="res">
            <h3>Frontend Development</h3>
            <ul>
              <li>Responsive design</li>
              <li>CSS preprocessors (e.g., Sass)</li>
              <li>Browser Developer Tools</li>
              <li>UI/UX principles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;