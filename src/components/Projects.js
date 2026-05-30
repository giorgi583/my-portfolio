import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'
// components
import ProjectsCard from './ProjectsCard'
const Projects = () => {
  const myProjects = [
    {
      img: assets.sprivaten,
      title: "PIXEL-PERFECT VISUAL DESIGN",
      languages: ["html", "css"],
      link: "https://sprivaten.netlify.app/",
      accents: ["pixel-perfect", "responsive", "accessibility", "semantic HTML", "CSS-only burger menu", "best practices", "SEO-friendly", "performance optimization"]
    },
    {
      img: assets.ecommerce,
      title: "E-COMMERCE WEBSITE",
      languages: ["html", "css", "javascript"],
      link: "https://ecommerce.netlify.app/",
      accents: ["Theme preference (dark/light)", "FIlters and sorting", "responsive", "carousel", "accessibility", "Full form validations", "API integration", "multiple pages", "SEO-friendly", ]
    },
    {
      img: assets.movies,
      title: "MOVIES APP",
      languages: ["React", "Plain css"],
      link: "https://moviesapp.netlify.app/",
      accents: ["Real APIs", "responsive", "Routes", "Real authorization/authentication", "multi-language", "theme prefference", "Skeleton loading", "product search", "pagination", "lazy loading", "movie details-page" ]
    },
    {
      img: assets.tictactoe,
      title: "TIC-TAC-TOE GAME",
      languages: ["React", "Plain css"],
      link: "https://tictactoe.netlify.app/",
      accents: ["Game logic", "responsive", "colors prefference", "vs computer", "vs friend", "scoreboard", "reset game", "animations", "computer dificulties", "sounds" ]
    },
    {
      img: assets.aiagency,
      title: "AGENCY-AI LANDING PAGE",
      languages: ["React/vite", "Tailwind css"],
      link: "https://aia.netlify.app/",
      accents: ["motion effects", "custom cursor", "Real Form submission", "responsive", "theme prefference(dark/light)", "toast notifications",  "modern design", "smooth animations" ]
    },
    {
      img: assets.resume,
      title: "AI RESUME BUILDER",
      languages: ["React/vite", "Tailwind css", "Nodejs", "Express", "MongoDB"],
      link: "https://resumebuilderai.netlify.app/",
      accents: ["AI integration", "Full-stack", "Real Authorization/authentication", "responsive", "API integration", "theme prefference(accent colors)", "user-friendly",  "modern design", "smooth animations" ]
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