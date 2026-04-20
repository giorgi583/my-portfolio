import React from 'react'
import { color, motion } from 'motion/react'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Experience = () => {
  const exp = [{language: 'HTML',  icon: <i class="fa-brands fa-html5"></i>, color: '#e34f26'}, {language: 'CSS', icon: <i class="fa-brands fa-css3-alt"></i>, color: '#264de4'}, {language: 'JavaScript', icon: <i class="fa-brands fa-js"></i>, color: '#f7df1e'}, {language: 'Node.js', icon: <i class="fa-brands fa-node-js"></i>, color: '#68a063'}, {language: 'React', icon: <i class="fa-brands fa-react"></i>, color: '#61dbfb'}, {language: 'Sass', icon: <i class="fa-brands fa-sass"></i>, color: '#c69'}, {language: 'Figma', icon: <i class="fa-brands fa-figma"></i>, color: '#f24e1e'}, {language: 'Git', icon: <i class="fa-brands fa-git-alt"></i>, color: '#f34f29'}, {language: 'GitHub', icon: <i class="fa-brands fa-github"></i>, color: '#000000'}, {language: 'Tailwind', icon: <i class="fa-brands fa-tailwind-css"></i>, color: '#06b6d4'}]
  return (
    <section className="section2" id='skills'>
      <div className="container">
      <motion.h1 
      initial={{scale: 0.5, opacity: 0}}
      whileInView={{scale: 1, opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
      viewport={{once: true}}
      className="s2_ttl">Skills</motion.h1>
      <motion.div 
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
      transition={{delayChildren: 0.3, staggerChildren: 0.2, duration: 0.5}}
      className='expdivs'>
      {exp.map((item, index) => {
        return (
          <motion.div 
          variants={{
        hidden: {scale: 0.5, opacity: 0},
        visible: {scale: 1, opacity: 1}
      }}
          className="exp" key={index}>
            <p className="s2ttl">{item.language}</p>
            <p style={{color: item.color}}>{item.icon}</p>
          </motion.div>
        )
      })}
      </motion.div>
      </div>
    </section>
  )
}

export default Experience