import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'
const Header = ({theme, setTheme}) => {
  const [sidebarOpen, setsidebaropen] = useState(false)
  useEffect(() => {
    if(sidebarOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  },[sidebarOpen])
  return (
    <>
    <motion.header 
    initial={{y: 30, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.4}}
    >
      <div className="progress-bar"></div>
    <div className="header">
      <h1>Portfolio</h1>
      <div className="menu" onClick={() => setsidebaropen(true)}><i class="fa-solid fa-bars"></i></div>
      <nav className={`headerNav ${sidebarOpen ? 'active' : ''}`}>
        <ul >
          <div className="close"><i class="fa-solid fa-xmark" onClick={() => setsidebaropen(false)}></i></div>
          <li><a onClick={()=> setsidebaropen(false)} href="#hero">Home</a></li>
          <li><a onClick={()=> setsidebaropen(false)} href="#experience">Experience</a></li>
          <li><a onClick={()=> setsidebaropen(false)} href="#projects">Projects</a></li>
          <li><a onClick={()=> setsidebaropen(false)} href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className='dark-mode' aria-label='theme switch' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}><img src={theme=== "dark" ? assets.light : assets.dark}  alt="" /></div>
    </div>
    <div className={`overlay-full ${sidebarOpen ? 'active' : ''}`}></div>
  </motion.header>
    </>
  )
}

export default Header