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

const App = () => {
  const snap = useProxy(ps5)
  const canvas3d = useRef()

  function capture() {
    canvas3d.current.toBlob(function (blob) {
      saveAs(blob, "3d.png")
    })
  }

  return (
    <>
      {/* <div>
          <h2>Controller Customizer</h2>
        </div> */}
      <div className="wrapper">
        <div className="panel1">
          {/* The 3d canvas */}
          <Canvas
            className="canvas3d"
            ref={canvas3d}
            gl={{ preserveDrawingBuffer: true }}
            pixelratio={[1, 1.5]}
            camera={{ position: [30, 30, 30] }}>
            {/* <color attach={"background"} {darkMode && args={["#000"]}} /> */}
            {/* <ambientLight intensity={0.2} /> */}
            <PerspectiveCamera makeDefault position={[50, 60, 70]} />
            {/* <spotLight intensity={0} angle={0.1} position={[5, 25, 20]} /> */}
            <Environment files="royal_esplanade_1k.hdr" />
            <Suspense fallback={<LoadingScreen />}>
              {/* <Center> */}
              <Stage intensity={1}>
                <Ps5 />
              </Stage>
              {/* </Center> */}
            </Suspense>
            <OrbitControls enableZoom={true} enablePan={true} />
          </Canvas>
          <button onClick={capture}>Take Picture</button>
        </div>
        <div className="panel2">
          {/* Editor canvas including the editor on the right */}
          <Modal />
        </div>
      </div>
    </>
  )
}

export default App
