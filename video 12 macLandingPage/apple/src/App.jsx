import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls, Environment, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'
import "./style.css"

const App = () => {
  return (
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      {/* <OrbitControls /> */}
     <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_09_4k.hdr" } />

     <ScrollControls pages={3}>
      <MacContainer />
     </ScrollControls>
    </Canvas>
  )
}

export default App
