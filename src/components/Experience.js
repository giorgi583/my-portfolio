import React from 'react'
import { color, motion } from 'motion/react'
const Experience = () => {
  const exp = [{language: 'HTML', level: 'Advanced', icon: <i class="fa-brands fa-html5"></i>, color: '#e34f26'}, {language: 'CSS', level: 'advanced', icon: <i class="fa-brands fa-css3-alt"></i>, color: '#264de4'}, {language: 'JavaScript', level: 'advanced', icon: <i class="fa-brands fa-js"></i>, color: '#f7df1e'}, {language: 'Node.js', level: 'intermediate', icon: <i class="fa-brands fa-node-js"></i>, color: '#68a063'}, {language: 'React', level: 'advanced', icon: <i class="fa-brands fa-react"></i>, color: '#61dbfb'}, {language: 'Sass', level: 'intermediate', icon: <i class="fa-brands fa-sass"></i>, color: '#c69'}]
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
            <p className="s2p">{item.level}</p>
          
          </motion.div>
        )
      })}
      </motion.div>
      </div>
    </section>
  )
}

export default Experience