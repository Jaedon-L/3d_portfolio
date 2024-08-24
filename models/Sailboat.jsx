import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import sailBoatScene from '../assets/3d/boat.glb'
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';

const Sailboat = ({isRotating, boatScale, boatPosition, ...props}) => {
    const {scene, animations }= useGLTF(sailBoatScene);
    const sailboatRef = useRef();

    // Set the initial state for rocking motion
  const rockingSpeed = 0.4; // Speed of the rocking motion
  const rockingAmplitude = 0.15; // Amplitude of the rocking motion

    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      const elapsedTime1 = clock.getElapsedTime();
      // Adjust the Y position using a sine wave for smooth up and down movement
      sailboatRef.current.position.y = boatPosition[1] + Math.sin(elapsedTime * 1.5) * 0.2;
      // Optional: rotate the boat slightly
      // sailboatRef.current.rotation.x += 0.001 * Math.PI;
      // sailboatRef.current.rotation.x -= 0.001 * Math.PI;
       // Rocking motion using sine function for smooth back-and-forth movement
      sailboatRef.current.rotation.z = Math.sin(elapsedTime1 * rockingSpeed) * rockingAmplitude;
    });



  return (
    <a.group ref={sailboatRef} scale={boatScale} position={boatPosition} {...props}>
    <mesh >
    <primitive object = {scene}/>
    </mesh>
    </a.group>
  )
}

export default Sailboat