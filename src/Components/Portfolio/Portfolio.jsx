import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const projects = [
  {
    title: "E-commerce Web Application",
    description: "Built a comprehensive e-commerce platform using React. Utilized React Context API for efficient state management. Implemented features for product browsing, cart management, and seamless navigation with React Router.",
    year: 2024,
    link: "https://ecommerce-website-react-project.vercel.app/"
  },
  {
    title: "Google Gemini Clone",
    description: "This project is a comprehensive clone of Google Gemini. It includes features such as real-time data fetching and implemented state management and user input handling in the React framework.",
    year: 2024,
    link: "https://gemini-clone-react-project.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    description: "Developed a personal portfolio website using React.js to showcase projects, skills, and experiences. Implemented React Router for smooth navigation between portfolio sections.",
    year: 2024,
    link: "#" // Replace with your actual Vercel link
  },
  {
    title: "Weather App",
    description: "Developed a weather app using React.js to provide users with real-time weather information and forecasts based on their location. Integrated external APIs such as OpenWeatherMap to fetch and display accurate weather data.",
    year: 2024,
    link: "https://weather-app-react-project-beta.vercel.app/" 
  }
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-year">Year: {project.year}</p>
              {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a> */}
            </div>
            {hoveredIndex === index && (
              <motion.div
                className="project-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                  View Project
                </a>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;