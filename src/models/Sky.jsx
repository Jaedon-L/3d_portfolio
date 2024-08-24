import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';
import Bird from './Bird';
import Sun from '../components/Sun';
import SkyShader from '../shaders/SkyShader';


const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene); 
    const skyRef = useRef();

    useFrame((_,delta) => {
      if(isRotating){
        skyRef.current.rotation.y += 0.15 * delta
      }
    })
  return (
    <>
    <SkyShader />
    <Sun /> 
    <mesh ref = {skyRef}>
        <primitive object = {sky.scene} />
        <Bird />
    </mesh>
    </>
  )
}

export default Sky