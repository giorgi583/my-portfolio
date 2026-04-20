import React from 'react'
import assets from '../assets/assets'
import  Toast  from 'react-hot-toast'
import { motion } from 'motion/react'
const Footer = ({theme}) => {
const [name, setName] = React.useState('')
const [email, setEmail] = React.useState('')
const [message, setMessage] = React.useState('')
   const key = '09f1b035-4e6c-43a0-be35-cace894d7130'
    const onSubmit = async (event) => {
      event.preventDefault();
      if(!name || !email || !message) {
        Toast.error('Please fill all the fields')
        return
      }
    const formData = new FormData(event.target);
    formData.append("access_key", key);
try {
const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
   if(data.success) {
       Toast.success('Thank you for your submission!')
       event.target.reset()
   }
   else {
       Toast.error(data.message)
   }
   setName('')
   setEmail('')
   setMessage('')
  }
 catch (error) {
Toast.error(error.message)
 }
  };
  return (
    <>
<footer>
  <div className="container">
         <div className="contact" id='contact'>
      <div className="conttext">
        <motion.h2 initial={{x: -30, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      viewport={{once: true}}>Contact</motion.h2>
        <motion.p initial={{x: -30, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.3}}
      viewport={{once: true}} className="mainp">Contact me if you are interested in working together. I would love to hear about your project and how I could help. Please fill in the form, and I’ll
          get back to you as soon as possible.</motion.p>
      </div>
      <motion.form initial={{x: 30, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.3}}
      viewport={{once: true}} onSubmit={onSubmit}>
        <input type="text" name="" id="" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="email" name="" id="" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea rows={6} type="text" className="bigtxt" placeholder="MESSAGE" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button type="submit">send message <i class="fa-solid fa-paper-plane"></i></button>
      </motion.form>
    </div>
    <div className="headercontent">
    <motion.div 
    initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5}}
      viewport={{once: true}}
    className="f-header">
      <h1>Socials</h1>
      <nav>
        <ul>
          <li><a target="_blank" href="https://github.com/giorgi583"><i className="fa-brands fa-github"></i></a></li>
          <li><a target="_blank" href="https://www.frontendmentor.io/profile/giorgi583" className="frontend"><img
                src={theme === "dark" ? assets.frontend : assets.frontendBlack} alt="frontend icon" width="19.68"/></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/giorgi-kutateladze-45086323b/"><i
                className="fa-brands fa-linkedin"></i></a></li>
          <li><a target="_blank" href="https://www.facebook.com/giorgi.kutateladze.14"><i
                className="fa-brands fa-facebook"></i></a></li>
        </ul>
      </nav>
      </motion.div>
    </div>
    </div>
</footer>
    </>
  )
}

export default Footer