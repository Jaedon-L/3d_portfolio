import { useRef } from "react";
import * as THREE from 'three';

import { useFrame, useLoader } from '@react-three/fiber';

const vertexShader = `
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 topColor;
  uniform vec3 bottomColor;
  uniform float offset;
  uniform float exponent;
  varying vec3 vWorldPosition;
  void main() {
    float h = normalize(vWorldPosition + offset).y;
    gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
  }
`;

const SkyShader = ({ topColor = new THREE.Color(0x0077ff), bottomColor = new THREE.Color(0xffffff), offset = 33, exponent = 0.6 }) => {
  const materialRef = useRef();

  return (
    <mesh scale={1000}>
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.BackSide}
        uniforms={{
          topColor: { value: topColor },
          bottomColor: { value: bottomColor },
          offset: { value: offset },
          exponent: { value: exponent },
        }}
      />
    </mesh>
  );
};
export default SkyShader;