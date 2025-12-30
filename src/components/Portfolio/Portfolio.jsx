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
import project6a from '../../assets/project6a.png';
import project7a from '../../assets/project7a.png';
import project8a from '../../assets/project8a.png';
import project9a from '../../assets/project9a.png';
import project10a from '../../assets/project10a.png';
import project11a from '../../assets/project11a.png';
import project12a from '../../assets/project12a.png';
import project13a from '../../assets/project13a.png';
import project14a from '../../assets/project14a.png';
import project15a from '../../assets/project15a.png';
import project15b from '../../assets/project15b.png';
import project16a from '../../assets/project16a.png';
import project17a from '../../assets/project17a.png';
import project18a from '../../assets/project18a.png';
import project19a from '../../assets/project19a.png';
import project20a from '../../assets/project20a.png';
import project21a from '../../assets/project21a.png';
import project22a from '../../assets/project22a.png';
import project23a from '../../assets/project23a.png';
import project23b from '../../assets/project23b.png';
import project23c from '../../assets/project23c.png';
import project23d from '../../assets/project23d.png';
import project23e from '../../assets/project23e.png';
import project25a from '../../assets/project25a.png';
import project25b from '../../assets/project25b.png';
import project25c from '../../assets/project25c.png';
import project25d from '../../assets/project25d.png';
import project26a from '../../assets/project26a.png';
import project26b from '../../assets/project26b.png';
import project26c from '../../assets/project26c.png';
import project26d from '../../assets/project26d.png';
import project26e from '../../assets/project26e.png';
import project26f from '../../assets/project26f.png';
import project26g from '../../assets/project26g.png';
import project26h from '../../assets/project26h.png';
import project26i from '../../assets/project26i.png';
import project27a from '../../assets/project27a.png';
import project27b from '../../assets/project27b.png';
import project28a from '../../assets/project28a.png';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'The Laundress Experience',
      category: 'High Poly',
      images: [project1a, project1b, project1c],
      description: 'A simple 3D look at a boutique shop front and inside space, showing clean design and cozy vibes.',
      tags: ['Roblox Studio', 'Blender', 'Store Design']
    },
    {
      id: 2,
      title: 'Rizz The Pizz',
      category: 'High Poly',
      images: [project2a, project2b, project2c],
      description: 'A bold and playful 3D concept for a modern pizzeria, featuring sleek interiors, glowing lights, & a sunset.',
      tags: ['Restaurant Render', '3D Interior', 'Blender']
    },
    {
      id: 3,
      title: 'Westview Ice Cream Parlour',
      category: 'Mid Poly',
      images: [project3a, project3b],
      description: 'A sweet little ice cream shop with soft lighting and playful design touches.',
      tags: ['Dessert Spot', 'Ice Cream Vibes', '3D Design']
    },
      {
      id: 4,
      title: 'Soviet Apartment Blocks',
      category: 'Mid Poly',
      images: [project5a, project5b, project6a, project7a],
      description: 'A gritty 3D take on post-war Soviet housing - boxy, elevated, and built for function over flair.',
      tags: ['Brutalist Design', 'Eastern Bloc Style', 'Urban Architecture']
    },
    {
      id: 5,
      title: 'Institutional & Landmark Pack',
      category: 'Mixed Poly',
      images: [project19a, project14a, project17a, project13a, project18a,  project16a, project22a],
      description: 'A collection of high-impact 3D buildings - from hospitals and hotels to training centers and temples - designed to anchor city scenes and add realism to public environments.',
      tags: ['Landmark Assets', 'Civic Architecture']
    },
    {
      id: 6,
      title: 'Urban Simulation Pack',
      category: 'Mixed Poly',
      images: [project12a, project9a, project11a, project10a, project8a, project21a, project20a],
      description: 'A full-scale 3D city environment featuring shops, offices, eateries, public buildings, and residential blocks - designed for simulation, storytelling, or game-ready use.',
      tags: ['City Assets', 'Architectural Pack']
    },
    {
      id: 7,
      title: 'Bloomfield Police Academy',
      category: 'Mid/Low Poly',
      images: [project4a, project4b, project4c, project4d, project4e],
      description: 'A sharp and detailed 3D render of a city-based police academy, built for realism and scale.',
      tags: ['Institutional Architecture', 'Exterior + Interior']
    },
    {
      id: 8,
      title: 'Modern Civic Structure',
      category: 'Mid Poly',
      images: [project15a, project15b],
      description: 'Sleek public building with tiled facades, warm lighting, and symmetrical layouts - designed for realism and versatility.',
      tags: ['Civic Assets', 'Public Architecture']
    },
    {
      id: 9,
      title: 'Crossroads Adventure Map',
      category: 'Low Poly',
      images: [project23a, project23b, project23c, project23d, project23e],
      description: 'A vibrant sandbox-style map with fantasy zones, slides, towers, and themed districts — built for exploration and fun.',
      tags: ['Low Poly World', 'Interactive Playground']
    },
    {
      id: 10,
      title: 'Physical Sciences South',
      category: 'Mid Poly',
      images: [project25a, project25b, project25c, project25d],
      description: 'A modern science facility with clean lines, arched details, and a structured layout - designed for campus realism.',
      tags: ['Campus Asset', 'Mid Poly Render','Educational Space']
    },
    {
      id: 12,
      title: 'GTA-Inspired Cityscape',
      category: 'Mixed Poly',
      images: [project26c, project26b, project26a, project26d, project26e, project26f, project26g, project26h, project26i, project28a ],
      description: 'A stylized urban map with glowing windows, graffiti walls, fast-food joints, and palm-lined streets - built for sandbox chaos and story-driven gameplay.',
      tags: ['Open World Assets', 'Urban Grit', 'Mixed Poly City']
    },
    {
      id: 13,
      title: 'Low-Poly World Pack',
      category: 'Low Poly',
      images: [project27a, project27b],
      description: 'A bright and playful set of low-poly scenes - from grassy terrain and blocky trees to circular city parks with roaming creatures. Built for lightweight performance and creative worldbuilding.',
      tags: ['Stylized Terrain', 'Low Poly Assets']
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

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
        {projects.length > 4 && (
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
                  <div 
                    key={i} 
                    className="modal-image-wrapper"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenImage(img);
                    }}
                  >
                    <img src={img} alt={`${selectedProject.title} ${i + 1}`} />
                    <div className="fullscreen-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                    </div>
                  </div>
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

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            className="fullscreen-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
          >
            <button 
              className="fullscreen-close"
              onClick={() => setFullscreenImage(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <motion.img 
              src={fullscreenImage} 
              alt="Fullscreen view"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="fullscreen-image"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
