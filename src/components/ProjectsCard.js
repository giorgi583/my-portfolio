
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
const ProjectsCard = ({project}) => {
  return (
    <motion.div 
    variants={{"hidden": {y: 20, opacity: 0}, "visible": {y: 0, opacity: 1}}}
    className="card">
          <div className="cardimg"><img className="cardimage" src={project.img} alt=""/>
            <div className="overlay"> <button className="deskbtn"><a href={project.link} target="_blank" rel="noopener noreferrer">view project</a></button> <button className="deskbtn"><a href={project.githubLink} target="_blank" rel="noopener noreferrer">view
                code</a></button></div>
          </div>
          <h3 className="s3h3">{project.title}  <div className="deploy"><div className="dot"><div className="dot2"></div></div><div className='sites'>{project.deployment.join(" | ")}</div></div></h3>
          <div className="cardp">
            <p className="s3p">{project.languages.join(", ")}</p>
            <p>ACCENTS:</p> 
            <ul className="emphasis">
              {project.accents && project.accents.map((item, index) => (
        
                <li className="s3li" key={index} >
                  <Check size={16} color="#f7df1e"/>
                  {item}
                </li>
              
              ))}
            </ul>
          </div>
          <div className="cardbtns">
            <button className="btn"><a href={project.link} target="_blank" rel="noopener noreferrer">view project</a></button>
            <button className="btn"><a href={project.githubLink} target="_blank" rel="noopener noreferrer">view code</a></button>
          </div>
        </motion.div>
  )
}

export default ProjectsCard