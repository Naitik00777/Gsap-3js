import { ScrollControls, useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import * as THREE from "three"


const MacContainer = () => {

    let model = useGLTF("/laptop.glb")
    let tex = useTexture("/red.jpeg")



    let meshes = {}
    model.scene.traverse((e) => {
        // if (e.isMesh) {
        //     console.log("Mesh found:", e.name);
        // }
        meshes[e.name] = e
    })

    // console.log(meshes)
    meshes.Screen.rotation.x = THREE.MathUtils.degToRad(270)

    

    meshes.Screen_ComputerScreen_0.material.map = tex
    meshes.Screen_ComputerScreen_0.material.roughness = 1
    meshes.Screen_ComputerScreen_0.material.metalness = 0
    meshes.Screen_ComputerScreen_0.material.needsUpdate = true


    let data = useScroll()

    useFrame((state, delta) => {
        meshes.Screen.rotation.x = THREE.MathUtils.degToRad(270 - data.offset * 90)

    })

    return (
        <group position={[0, -10, 20]} >
            <primitive object={model.scene} />
        </group>
    )
}

export default MacContainer
