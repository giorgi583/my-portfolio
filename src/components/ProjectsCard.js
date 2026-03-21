import React from 'react'
import { motion } from 'motion/react'
const ProjectsCard = ({project}) => {
  return (
    <motion.div 
    variants={{"hidden": {y: 20, opacity: 0}, "visible": {y: 0, opacity: 1}}}
    className="card">
          <div className="cardimg"><img className="cardimage" src={project.img} alt=""/>
            <div className="overlay"> <button className="deskbtn">view project</button> <button className="deskbtn">view
                code</button></div>
          </div>
          <h3 className="s3h3">{project.title}</h3>
          <div className="cardp">
            <p className="s3p">{project.languages.join(", ")}</p>
          </div>
          <div className="cardbtns">
            <button className="btn">view project</button>
            <button className="btn">view code</button>
          </div>
        </motion.div>
  )
}

export default ProjectsCard