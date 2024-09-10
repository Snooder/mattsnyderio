import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ImageCarousel = ({ images }) => {
  const groupRef = useRef();
  const meshRefs = useRef([]); // Array to hold refs for each image

  // Slower rotation speed and make each image face the camera
  useFrame(({ camera }) => {
    if (groupRef.current) {
      // Rotate the entire carousel slowly
      groupRef.current.rotation.y += 0.002;

      // Make each image face the camera
      meshRefs.current.forEach((mesh) => {
        if (mesh) {
          mesh.lookAt(camera.position); // Make each mesh look at the camera position
        }
      });
    }
  });

  // Distribute images in a circular pattern
  const radius = 10; // Reduced radius for the carousel
  const angleStep = (2 * Math.PI) / images.length;

  return (
    <group ref={groupRef}>
      {images.map((image, index) => {
        const angle = index * angleStep;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <mesh
            position={[x, 0, z]}
            key={index}
            ref={(el) => (meshRefs.current[index] = el)} // Store ref for each image
          >
            <boxBufferGeometry args={[12, 12, 0.1]} />
            <meshBasicMaterial>
              <primitive attach="map" object={new THREE.TextureLoader().load(image)} />
            </meshBasicMaterial>
          </mesh>
        );
      })}
    </group>
  );
};

const PhotoCarousel3D = ({ images }) => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      // Completely disable the `wheel` event for OrbitControls
      controlsRef.current.domElement.addEventListener("wheel", (event) => {
        event.stopPropagation(); // Stop the wheel event from propagating
        event.preventDefault();  // Prevent the default zooming behavior
      });
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '1000px' }}> {/* Larger frame */}
      <Canvas camera={{ position: [0, 0, 15], fov: 100 }}> {/* Camera moved closer */}
        {/* <directionalLight position={[0, 0, 0]} /> */}
        {/* Disable zoom, pan, and scroll via `ref` */}
        <OrbitControls ref={controlsRef} enableZoom={false} enablePan={false} />
        <ImageCarousel images={images} />
      </Canvas>
    </div>
  );
};

export default PhotoCarousel3D;
