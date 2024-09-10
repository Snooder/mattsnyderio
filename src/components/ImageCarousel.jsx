import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

// Extend OrbitControls so we can use it as a JSX component
extend({ OrbitControls });

const ImageCarousel = ({ images }) => {
  const groupRef = useRef();

  // Slower rotation speed
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002; // Slow down rotation
    }
  });

  // Distribute images in a circular pattern
  const radius = 25; // Large radius for the carousel
  const angleStep = (2 * Math.PI) / images.length;

  return (
    <group ref={groupRef}>
      {images.map((image, index) => {
        const angle = index * angleStep;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <mesh position={[x, 0, z]} rotation={[0, -angle, 0]} key={index}>
            {/* Larger images */}
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

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree(); // Access the camera and the renderer's DOM element

  useEffect(() => {
    const controls = new OrbitControls(camera, domElement);
    controls.enableZoom = false; // Disable zoom
    controls.enableRotate = false; // Disable rotation
    controls.enablePan = false; // Disable panning

    return () => {
      controls.dispose(); // Clean up on unmount
    };
  }, [camera, domElement]);

  return null; // No need to render anything
};

const PhotoCarousel3D = ({ images }) => {
  return (
    <Canvas camera={{ position: [0, 0, 60], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 0, 0]} />

      {/* Use our custom camera controls */}
      <CameraControls />

      <ImageCarousel images={images} />
    </Canvas>
  );
};

export default PhotoCarousel3D;
