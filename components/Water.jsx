// WaterComponent.jsx
import { useRef, useEffect, useMemo } from 'react';
import { useFrame, extend, useThree, useLoader } from '@react-three/fiber';
import { Water } from 'three-stdlib';
import * as THREE from 'three';
import waterNormalsImage from '../assets/images/waternormals.jpg';

extend({ Water });

const WaterComponent = ({ position, rotation, size }) => {
  const ref = useRef();
  const { gl } = useThree();

  const waterNormals = useLoader(THREE.TextureLoader, waterNormalsImage);
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001040,
      distortionScale: 4,
      fog: true,
      format: gl.encoding,
    }),
    [waterNormals, gl.encoding]
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.material.uniforms.time.value += delta;
    }
  });

  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
};
//   const waterNormals = new THREE.TextureLoader().load(
//     // 'https://threejs.org/examples/textures/waternormals.jpg',
//     // (texture) => {
//     //   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//     // }
//   );

//   useEffect(() => {
//     if (waterRef.current) {
//       waterRef.current.material.uniforms.size.value = 10;
//       waterRef.current.material.uniforms.distortionScale.value = 3.7;
//     }
//   }, []);

//   useFrame((state, delta) => {
//     if (waterRef.current) {
//       waterRef.current.material.uniforms.time.value += delta;
//     }
//   });

//   return (
//     <water
//       ref={waterRef}
//       args={[
//         new THREE.PlaneGeometry(size.width, size.height),
//         {
//           textureWidth: 512,
//           textureHeight: 512,
//           waterNormals: waterNormals,
//           sunDirection: new THREE.Vector3(0,1,0),
//           sunColor: 0xffee88,
//           waterColor: 0x001040,
//           distortionScale: 4,
//           fog: true,
//         },
//       ]}
//       rotation={rotation}
//       position={position}
//     />
//   );
// };

export default WaterComponent;
