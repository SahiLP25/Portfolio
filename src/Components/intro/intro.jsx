import React, { useState, useEffect } from 'react';
import './intro.css';
import Resume from '../../assets/SahilCV.pdf';

const Intro = () => {
  const [currentRole, setCurrentRole] = useState('Web Developer');
  const roles = ['Web Developer', 'Frontend Developer', 'Software Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(roles[(roles.indexOf(currentRole) + 1) % roles.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentRole, roles]);

  return (
    <div id="intro">
      <div id="main">
        <div id="backtext">
          <h1>{currentRole}</h1>
        </div>
        <div className="intro">
          <h4>I'm a</h4>
          <h1>{currentRole}</h1>
          <p>
            As an innovative {currentRole} with a love for crafting immersive digital
            experiences. Ever since I wrote my first line of code, I've been
            captivated by the endless possibilities of web development and the
            power it holds to connect people and ideas.
          </p>
          <a className="resume" href={Resume} download={true}>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;