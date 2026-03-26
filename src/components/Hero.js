import React, { useEffect } from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'
const Hero = () => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scroll = document.querySelector('.progress-bar')
      const rocket = document.querySelector('.rocket-wrapper')
      scroll.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
      rocket.style.left = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
    })
  },[])
  return (
    <section id='hero' className="section1">
      <motion.div 
      initial={{y: 30, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      className="profileimage">
        <img className="profileimg" src={assets.pimg} alt="my image" />
      </motion.div>
      <div className="container">
      <motion.div 
      initial={{y: 30, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.3}}
      className="maintxt">
        <h2 className="mainttl">Nice to meet you! I’m Giorgi.</h2>
        <p className="mainp">Based in Georgia, I’m a full stack developer passionate about building accessible websites that
          users love, Specializing in modern web technologies and responsive design.</p>
        <button><a href="#contact">contact me</a></button>
      </motion.div>
      </div>
      <i className='fa-solid fa-arrow-down scroll-indicator'></i>
      <div className='decor'></div>
    </section>
  )
}

export default Hero