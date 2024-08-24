import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

const Sun = () => {
  const sunRef = useRef();
  
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.position.set(Math.sin(Date.now() * 0.001) * 500, 200, Math.cos(Date.now() * 0.001) * 500);
    }
  });

  return (
    <directionalLight
      ref={sunRef}
      color={0xbdbdca}
      intensity={1.5}
      position={[100, 200, 100]}
      castShadow
    />
  );
};

export default Sun;
