import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Collaboration.css";

// Import brand logos
import robloxLogo from "../../assets/roblox.png";
import basedStuLogo from "../../assets/basedstu.png";
import creatoxLogo from "../../assets/creatox.png";
import ropLogo from "../../assets/ROP.png";
import slingshotLogo from "../../assets/slingshot.png";
import westviewLogo from "../../assets/westview.png";

const Collaboration = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);

  const brands = [
    {
      id: 1,
      name: "Slingshot",
      logo: slingshotLogo,
      description: "Worked as a developer",
      category: "Gaming",
      link: "https://slingshotdao.com/"
    },
    {
      id: 2,
      name: "Creatox",
      logo: creatoxLogo,
      description: "Works as a developer",
      category: "Design",
      link: "https://creatox.dev/portfolio"
    },
    {
      id: 3,
      name: "Westview High",
      logo: westviewLogo,
      description: "Development collaboration",
      category: "Development",
      link: "https://www.roblox.com/communities/8337793/Westview-High#!/about"
    },
    {
      id: 4,
      name: "Republic of Pakistan",
      logo: ropLogo,
      description: "Worked as a lead developer",
      category: "Development",
      link: "https://www.roblox.com/communities/1129060/PK-Republic-of-Pakistan#!/about"
    },
    {
      id: 5,
      name: "Based Studio",
      logo: basedStuLogo,
      description: "Creative game development partnership",
      category: "Studio",
      link: "https://www.roblox.com/communities/9973573/Based-Studios#!/about"
    },
  ];

  return (
    <section className="collaboration" id="collaborations">
      <div className="collaboration-wrapper">
        <motion.div
          className="brands-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {brands.map((brand) => (
            <motion.a
              key={brand.id}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: brand.id * 0.1 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div className="brand-logo-wrapper">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
              <div className="brand-info">
                <h3 className="brand-name">{brand.name}</h3>
                <span className="brand-category">{brand.category}</span>
              </div>
              <div className={`brand-overlay ${hoveredBrand === brand.id ? "visible" : ""}`}>
                <p className="brand-description">{brand.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
