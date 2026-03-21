import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'
// components
import ProjectsCard from './ProjectsCard'
const Projects = () => {
  const myProjects = [
    {
      img: assets.design,
      title: "DESIGN PORTFOLIO",
      languages: ["html", "css"]
    },
    {
      img: assets.elearning,
      title: "E-LEARNING",
      languages: ["html", "css"]
    },
    {
      img: assets.todo,
      title: "TODO",
      languages: ["html", "css", "javascript"]
    },
    {
      img: assets.entertainment,
      title: "ENTERTAINMENT",
      languages: ["html", "css", "javascript"]
    },
    {
      img: assets.memory,
      title: "MEMORY",
      languages: ["html", "css", "javascript"]
    },
    {
      img: assets.galery,
      title: "GALLERY",
      languages: ["html", "css", "javascript"]
    }
  ]
  return (
     <section className="section3" id='projects'>
      <div className="container">
      <div className="s3header">
        <motion.h2 
        initial={{x: -30, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.3}}
        viewport={{once: true}}
        className="mainttl s3ttl">Projects</motion.h2>
        <motion.button 
        initial={{x: 30, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.3}}
        viewport={{once: true}}
        ><a href="#contact">contact me</a></motion.button>
      </div>
      <motion.div 
      initial = 'hidden'
      whileInView='visible'
      viewport={{once: true}}
      transition={{delayChildren: 0.2, staggerChildren: 0.3, duration: 0.4}}
      className="cards">
        {myProjects.map((project, index) => (
          <ProjectsCard  key={index} project={project} />
        ))}
      </motion.div>
      </div>
    </section>
  )
}

export default Projects