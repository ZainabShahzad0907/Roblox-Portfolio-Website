import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

// Import project images
import project1a from '../../assets/project1a.png';
import project1b from '../../assets/project1b.png';
import project1c from '../../assets/project1c.png';
import project2a from '../../assets/project2a.png';
import project2b from '../../assets/project2b.png';
import project2c from '../../assets/project2c.png';
import project3a from '../../assets/project3a.png';
import project3b from '../../assets/project3b.png';
import project4a from '../../assets/project4a.png';
import project4b from '../../assets/project4b.png';
import project4c from '../../assets/project4c.png';
import project4d from '../../assets/project4d.png';
import project4e from '../../assets/project4e.png';
import project5a from '../../assets/project5a.png';
import project5b from '../../assets/project5b.png';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Futuristic City Environment',
      category: 'Urban Design',
      images: [project1a, project1b, project1c],
      description: 'A detailed futuristic cityscape with neon lighting and advanced architecture',
      tags: ['Roblox Studio', 'Blender', 'Lighting']
    },
    {
      id: 2,
      title: 'Medieval Fantasy Castle',
      category: 'Fantasy',
      images: [project2a, project2b, project2c],
      description: 'Immersive medieval castle with intricate details and atmospheric lighting',
      tags: ['Environment', 'Architecture', 'Detail']
    },
    {
      id: 3,
      title: 'Tropical Island Resort',
      category: 'Nature',
      images: [project3a, project3b],
      description: 'Beautiful tropical paradise with crystal clear waters and lush vegetation',
      tags: ['Nature', 'Water', 'Landscape']
    },
    {
      id: 4,
      title: 'Sci-Fi Space Station',
      category: 'Sci-Fi',
      images: [project4a, project4b, project4c, project4d, project4e],
      description: 'Advanced space station interior with futuristic technology and design',
      tags: ['Sci-Fi', 'Interior', 'Tech']
    },
    {
      id: 5,
      title: 'Haunted Mansion',
      category: 'Horror',
      images: [project5a, project5b],
      description: 'Spooky haunted mansion with eerie atmosphere and gothic architecture',
      tags: ['Horror', 'Atmosphere', 'Gothic']
    },
    {
      id: 6,
      title: 'Modern Office Complex',
      category: 'Modern',
      images: [project1a, project2a],
      description: 'Contemporary office space with clean lines and professional design',
      tags: ['Modern', 'Interior', 'Clean']
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="portfolio" id="projects">
      {/* Background */}
      <div className="portfolio-bg">
        <div className="portfolio-orb-1"></div>
        <div className="portfolio-orb-2"></div>
        <div className="portfolio-grain"></div>
      </div>

      <div className="portfolio-wrapper">
        {/* Header */}
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-tag">
            <div className="tag-dot"></div>
            <span>Portfolio</span>
          </div>
          <h2 className="portfolio-heading">
            Featured <span className="heading-gradient">Projects</span>
          </h2>
          <p className="portfolio-lead">
            Explore my latest work showcasing immersive environments and creative excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <div className="view-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                      <span className="view-text">View Project</span>
                    </div>
                  </div>
                  <div className="project-category">{project.category}</div>
                  <div className="image-count">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span>{project.images.length}</span>
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <motion.div 
            className="portfolio-actions"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              <span>{showAll ? 'Show Less' : 'Show More Projects'}</span>
              <motion.svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M6 9l6 6 6-6"/>
              </motion.svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <span className="modal-category">{selectedProject.category}</span>
              </div>

              <div className="modal-images">
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt={`${selectedProject.title} ${i + 1}`} />
                ))}
              </div>

              <div className="modal-details">
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
