import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Center, Environment, OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei"
import Ps5 from "./components/Ps5"
import { ps5, darkMode } from "./store/index"
import { useProxy } from "valtio"
import { saveAs } from "file-saver"
import Modal from "./components/Modal"
import LoadingScreen from "./components/LoadingScreen"
import Navbar from "./components/Navbar/nav"
import App from "./App"
import Hero from "./components/CG/Hero"
import { Route, Routes } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <div className="container"> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/app" element={<App />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* </div> */}
    </>
  )
}

export default Home
