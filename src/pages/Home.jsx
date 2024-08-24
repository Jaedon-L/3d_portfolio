
import {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island';
import Sky from '../models/Sky';
import Sailboat from '../models/Sailboat';
import Bird from '../models/Bird';
import HomeInfo from '../components/HomeInfo';
import { soundoff, soundon } from "../assets/icons";
import ocean from '../assets/ocean.mp3';
import SkyShader from '../shaders/SkyShader';



const Home = () => {

  const audioRef = useRef(new Audio(ocean));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 10, -575]; 
    let rotation = [0.2 , 10, 0]; 

    if (window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];       
    } else {
      screenScale = [1,1,1];
    }
    return [screenScale, screenPosition, rotation];
  }
  const adjustBoatForScreenSize = () => {
    let screenScale = [3, 3, 3];
    let screenPosition = [0, -4, -4];

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }

     // Fine-tuning values based on your specific requirements
     screenScale = [.1,.1,.1]; // Adjust this value to change the boat's size
     screenPosition = [10.5, -5.5, -5.5]; // Adjust this value to change the boat's position

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize(); 
  const [boatScale, boatPosition] = adjustBoatForScreenSize(); 



  return (
    <section className='w-full h-screen relative'>

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage = {currentStage}/>}
        </div>

        <Canvas 
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{near: 0.1, far: 1000}}
        >
            <Suspense fallback = {<Loader />}>
                <directionalLight position={[1,1,1]} intensity={2}/>
                <ambientLight intensity={1}/> 
                
                
                <hemisphereLight skyColor = "#b1e1ff" groundColor='#000000' intensity={1}/> 

               
                <Sky isRotating={isRotating}></Sky>
                <SkyShader />
                <Sailboat 
                isRotating = {isRotating}
                boatScale = {boatScale}
                boatPosition = {boatPosition}
                rotation = {[0,1.85,0]}
                
                />
                <Island 
                position = {islandPosition}
                scale = {islandScale}
                rotation = {islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage ={setCurrentStage}
                renderOrder={100} // Higher render order
                /> 

             {/* <Bird renderOrder={0} /> */}
            </Suspense>
        </Canvas>

        <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home