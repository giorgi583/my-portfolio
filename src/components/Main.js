import React, { useEffect, useState } from 'react'
import { RocketIcon } from 'lucide-react'
// components
import Projects from './Projects'
import Experience from './Experience'
import Hero from './Hero'
const Main = () => {
  const [showButton, setShowButton] = React.useState(false);
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 2000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    }
  },[])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <main>
<Hero />
<Experience />
<Projects />
 {showButton && <button onClick={scrollUp} className='scroll-up'><i className='fa-solid fa-angle-up'></i></button> }
    </main>
  )
}

export default Main