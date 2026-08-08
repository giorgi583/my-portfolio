
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
      githubLink: "https://github.com/giorgi583/final-project.git",
      deployment: ["Github pages"],
      link: "https://giorgi583.github.io/final-project/",
      accents: ["pixel-perfect", "responsive", "accessibility", "semantic HTML", "CSS-only burger menu", "best practices", "SEO-friendly", "performance optimization"]
    },
    {
      img: assets.movies,
      title: "MOVIES APP",
      languages: ["React", "Plain css"],
      githubLink: "https://github.com/giorgi583/react_final.git",
      deployment: ["Github pages"],
      link: "https://giorgi583.github.io/react_final/",
      accents: ["Real APIs", "responsive", "Routes", "Real authorization/authentication", "multi-language", "theme prefference", "Skeleton loading", "product search", "pagination", "lazy loading", "movie details-page" ]
    },
    {
      img: assets.tictactoe,
      title: "TIC-TAC-TOE GAME",
      languages: ["React", "Plain css"],
      githubLink: "https://github.com/giorgi583/Tic-tac-toe-game.git",
      deployment: ["Github pages"],
      link: "https://giorgi583.github.io/Tic-tac-toe-game/",
      accents: ["Game logic", "responsive", "colors prefference", "vs computer", "vs friend", "scoreboard", "reset game", "animations", "computer dificulties", "sounds" ]
    },
    {
      img: assets.aiagency,
      title: "AGENCY-AI LANDING PAGE",
      languages: ["React/vite", "Tailwind css"],
      githubLink: "https://github.com/giorgi583/Agency-AI.git",
      deployment: ["Github pages"],
      link: "https://giorgi583.github.io/Agency-AI/",
      accents: ["motion effects", "custom cursor", "Real Form submission", "responsive", "theme prefference(dark/light)", "toast notifications",  "modern design", "smooth animations" ]
    },
    {
      img: assets.resume,
      title: "AI RESUME BUILDER",
      languages: ["React/vite", "Tailwind css", "Nodejs", "MongoDB"],
      githubLink: "https://github.com/giorgi583/Resume-builder-website.git",
      deployment: ["Vercel", "Render", "MongoDB Atlas"],
      link: "https://resume-builder-website-2qcwwoa4o-me-4758.vercel.app",
      accents: [ "Full-stack", "Real authentication", "AI features", "responsive", "API integration", "theme prefference(accent colors)", "user-friendly",  "modern design", "routes" ]
    },
    {
      img: assets.ecommerce,
      title: "E-COMMERCE STORE",
      languages: ["React/vite", "Tailwind css", "Nodejs", "PostgreSQL"],
      githubLink: "https://github.com/giorgi583/e-commerce.git",
      deployment: ["Netlify"],
      link: "https://ecommercestore.netlify.app/",
      accents: [ "Full-stack", "Real Authorization/authentication", "admin pages", "responsive", "Lazy loading", "user-friendly", "pagination", "filtering",  "API integration",  "routes" ]
    },
    {
      img: assets.financial,
      title: "FINANCIAL TRACKER",
      languages: ["React/vite", "Tailwind css", "Nodejs", "PostgreSQL"],
      githubLink: "https://github.com/giorgi583/financial-tracker.git",
      deployment: ["Vercel", "Northflank", "Neon"],
      link: "https://financial-tracker-lovat.vercel.app/",
      accents: [ "Full-stack", "Real authentication", "responsive", "multi-language", "API integration", "theme prefference(accent colors && dark/light)", "user-friendly",  "modern design", "routes", "anaytics" ]
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