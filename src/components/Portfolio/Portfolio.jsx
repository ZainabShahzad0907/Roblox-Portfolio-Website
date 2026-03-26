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
import project29a from '../../assets/project29a.png';
import project29b from '../../assets/project29b.png';
import project29c from '../../assets/project29c.png';
import project29d from '../../assets/project29d.png';
import project29e from '../../assets/project29e.png';
import project29f from '../../assets/project29f.png';
import project29g from '../../assets/project29g.png';
import project29h from '../../assets/project29h.png';
import project29i from '../../assets/project29i.png';
import project29j from '../../assets/project29j.png';

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
      title: 'Military Academy Map',
      category: 'Mid Poly',
      images: [project29a, project29b, project29c, project29d, project29e, project29f, project29g, project29h, project29i, project29j],
      description: 'A structured mid-poly Military Academy map designed for immersive training environments with a focus on realism and efficient layout.',
      tags: ['Military Environment', 'Training Facility', 'Mid Poly Map ']
    },
    {
      id: 5,
      title: 'Soviet Apartment Blocks',
      category: 'Mid Poly',
      images: [project5a, project5b, project6a, project7a],
      description: 'A gritty 3D take on post-war Soviet housing - boxy, elevated, and built for function over flair.',
      tags: ['Brutalist Design', 'Eastern Bloc Style', 'Urban Architecture']
    },
    {
      id: 6,
      title: 'Institutional & Landmark Pack',
      category: 'Mixed Poly',
      images: [project19a, project14a, project17a, project13a, project18a, project16a, project22a],
      description: 'A collection of high-impact 3D buildings - from hospitals and hotels to training centers and temples.',
      tags: ['Landmark Assets', 'Civic Architecture']
    },
    {
      id: 7,
      title: 'Urban Simulation Pack',
      category: 'Mixed Poly',
      images: [project12a, project9a, project11a, project10a, project8a, project21a, project20a],
      description: 'A full-scale 3D city environment featuring shops, offices, eateries, public buildings, and residential blocks.',
      tags: ['City Assets', 'Architectural Pack']
    },
    {
      id: 8,
      title: 'Bloomfield Police Academy',
      category: 'Mid/Low Poly',
      images: [project4a, project4b, project4c, project4d, project4e],
      description: 'A sharp and detailed 3D render of a city-based police academy, built for realism and scale.',
      tags: ['Institutional Architecture', 'Exterior + Interior']
    },
    {
      id: 9,
      title: 'Modern Civic Structure',
      category: 'Mid Poly',
      images: [project15a, project15b],
      description: 'Sleek public building with tiled facades, warm lighting, and symmetrical layouts.',
      tags: ['Civic Assets', 'Public Architecture']
    },
    {
      id: 10,
      title: 'Crossroads Adventure Map',
      category: 'Low Poly',
      images: [project23a, project23b, project23c, project23d, project23e],
      description: 'A vibrant sandbox-style map with fantasy zones, slides, towers, and themed districts.',
      tags: ['Low Poly World', 'Interactive Playground']
    },
    {
      id: 11,
      title: 'Physical Sciences South',
      category: 'Mid Poly',
      images: [project25a, project25b, project25c, project25d],
      description: 'A modern science facility with clean lines, arched details, and a structured layout.',
      tags: ['Campus Asset', 'Mid Poly Render', 'Educational Space']
    },
    {
      id: 12,
      title: 'GTA-Inspired Cityscape',
      category: 'Mixed Poly',
      images: [project26c, project26b, project26a, project26d, project26e, project26f, project26g, project26h, project26i, project28a],
      description: 'A stylized urban map with glowing windows, graffiti walls, fast-food joints, and palm-lined streets.',
      tags: ['Open World Assets', 'Urban Grit', 'Mixed Poly City']
    },
    {
      id: 13,
      title: 'Low-Poly World Pack',
      category: 'Low Poly',
      images: [project27a, project27b],
      description: 'A bright and playful set of low-poly scenes - from grassy terrain to circular city parks.',
      tags: ['Stylized Terrain', 'Low Poly Assets']
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="portfolio" id="projects">
      {/* Background Effects */}
      <div className="portfolio__fx">
        <div className="portfolio__gradient" />
      </div>

      <div className="portfolio__container">
        {/* Header */}
        <motion.header 
          className="portfolio__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="portfolio__label">Portfolio</span>
          <h2 className="portfolio__title">
            Featured <span className="portfolio__title--accent">Projects</span>
          </h2>
          <p className="portfolio__subtitle">
            Explore our latest work showcasing immersive environments and creative excellence
          </p>
        </motion.header>

        {/* Projects List */}
        <div className="portfolio__list">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="portfolio__item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio__item-media">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="portfolio__item-img"
                  />
                  <div className="portfolio__item-overlay">
                    <span className="portfolio__item-view">View Project</span>
                  </div>
                  <span className="portfolio__item-count">
                    {project.images.length} images
                  </span>
                </div>

                <div className="portfolio__item-info">
                  <div className="portfolio__item-meta">
                    <span className="portfolio__item-num">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="portfolio__item-cat">{project.category}</span>
                  </div>
                  <h3 className="portfolio__item-title">{project.title}</h3>
                  <p className="portfolio__item-desc">{project.description}</p>
                  <div className="portfolio__item-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="portfolio__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        {projects.length > 6 && (
          <motion.div 
            className="portfolio__toggle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button 
              className="portfolio__btn"
              onClick={() => setShowAll(!showAll)}
            >
              <span>{showAll ? 'Show Less' : 'View All Projects'}</span>
              <motion.svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                animate={{ rotate: showAll ? 180 : 0 }}
              >
                <path d="M6 9l6 6 6-6"/>
              </motion.svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="portfolio__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="portfolio__modal-content"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="portfolio__modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              <div className="portfolio__modal-header">
                <span className="portfolio__modal-cat">{selectedProject.category}</span>
                <h3 className="portfolio__modal-title">{selectedProject.title}</h3>
              </div>

              <div className="portfolio__modal-gallery">
                {selectedProject.images.map((img, i) => (
                  <div 
                    key={i} 
                    className="portfolio__modal-img"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullscreenImage(img);
                    }}
                  >
                    <img src={img} alt={`${selectedProject.title} ${i + 1}`} />
                    <div className="portfolio__modal-expand">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="portfolio__modal-details">
                <p className="portfolio__modal-desc">{selectedProject.description}</p>
                <div className="portfolio__modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="portfolio__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            className="portfolio__fullscreen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
          >
            <button 
              className="portfolio__fullscreen-close"
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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
