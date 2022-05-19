import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EarthMap from '../assets/8k-earth.jpeg';
import { TextureLoader } from "three";




const  Earth =() => {
  const [colorMap,normalMap, specularMap, ] = useLoader(
    TextureLoader,
    [EarthMap]
  );

  return (
    <>
     <ambientLight intensity={1} />
    <mesh>
    <sphereGeometry args={[3.2,32,32]} />
        <meshPhongMaterial color='blue' />
        <meshStandardMaterial
        map={specularMap}
        opacity={0.1}
        deptWrith={true}
        transparent={true}
        side={THREE.DoubleSide}
        />


    </mesh>
   <mesh>
        <sphereGeometry args={[3,32,32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial 
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7} />
        <OrbitControls
          enableZoom={true}
          // enablePan={true}
          enableRotate={true}
        />
      </mesh> 






{/* 
     <ambientLight intensity={1} />
     <mesh>
        <sphereGeometry args={[3.5,32,32]} />
        <meshPhongMaterial color='blue' />
        <meshStandardMaterial
        map={specularMap}
        opacity={0.1}
        deptWrith={true}
        transparent={true}
        side={THREE.DoubleSide}
        />

     </mesh>
      <mesh>
        <sphereGeometry args={[3,32,32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial 
        map={colorMap}
        normalMap={normalMap}
        metalness={0.4}
        roughness={0.7} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
        />
      </mesh> */}
    </>
  );
}


export default Earth;