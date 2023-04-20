import { useEffect, useRef, useState } from 'react'
import Header from './Components/header'
import Highlight from './Components/highlight'
import Navbar from './Components/navbar'
import Typoprofil from './Components//typoprofil'
import Skillsparam from './Components/skillsparam'
import Project from './Components/project'
import Kidding from './Components/kidding'
import About from './Components/about'
import Footer from './Components/footer'
import { useInView } from 'react-intersection-observer'

function App() {
  const { ref: myRef, inView: stepEl} = useInView();
  const { ref: proRef, inView: stepPro} = useInView();
  
  return (
    <div className="App px-4">
      <Header refApp={myRef}/>
      <Typoprofil />
      <Highlight />
      <Navbar />
      <Skillsparam />
      <Project refApp={proRef} step={stepPro}/>
      <Kidding />
      <About refApp={myRef} />

      <Footer />
    </div>
  )
}

export default App
