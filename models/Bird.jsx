import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'

import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
    const birdRef = useRef();

    //load 3d model
    const { scene, animations } = useGLTF(birdScene); 

    //get access to aniamtions
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
      // console.log("All available animations: ", actions);

      actions["Scene"].play();
    }, []);

    useFrame(({ clock, camera }) => {
      // Update the Y position to simulate bird-like motion using a sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 7;
  
      // Check if the bird reached a certain endpoint relative to the camera
      if (birdRef.current.position.x > camera.position.x + 20) {
        // Change direction to backward and rotate the bird 180 degrees on the y-axis
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        // Change direction to forward and reset the bird's rotation
        birdRef.current.rotation.y = 0;
      }
  
      // Update the X and Z positions based on the direction
      if (birdRef.current.rotation.y === 0) {
        // Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
        
      } else {
        // Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    });
  return (
    <mesh ref = {birdRef} position={[5, 0 , -5]} scale={[1, 1, 1]} renderOrder={-10}>

      <primitive object = {scene}/>
    </mesh>
  )
}

export default Bird