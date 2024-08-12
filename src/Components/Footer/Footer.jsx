import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', url: 'mailto:Sahil2000.sp@gmail.com' },
    { name: 'GitHub', url: 'https://github.com/SahiLP25' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sahil-patel25/' },
    { name: 'Instagram', url: 'https://www.instagram.com/sahil._.patel/' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="footer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="footer-content" variants={childVariants}>
        <h3>Sahil Patel</h3>
        <p>Frontend Developer | Web Developer | Software Developer</p>
      </motion.div>
      <motion.div className="social-links" variants={childVariants}>
        {socialLinks.map((link, index) => (
          <motion.a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>
      <motion.div className="copyright" variants={childVariants}>
        <p>&copy; {currentYear} Sahil Patel. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;