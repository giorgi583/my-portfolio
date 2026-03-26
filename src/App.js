import React, { useState, useEffect} from 'react'
import { Toaster } from 'react-hot-toast'
import { RocketIcon } from 'lucide-react'
// components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// css
import './index.css'
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  useEffect(() => {
    localStorage.setItem('theme', theme)
  document.documentElement.classList.add(theme === 'dark' ? theme : "light")
  document.documentElement.classList.remove(theme === 'dark' ? "light" : 'dark')
  },
     [theme])

     useEffect(() => {
      document.documentElement.classList.add(theme === 'dark' ? theme : 'light')
      document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark')
     },[])
  return (
    <>
    
    <Toaster />
    <Header theme = {theme} setTheme = {setTheme}/>
    <Main />
    <Footer theme = {theme}/>
    </>
  )
}

export default App