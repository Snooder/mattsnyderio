import { useGLTF, useAnimations } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber"; // Corrected import for useFrame
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "./Loader";
import spacemanScene from "../assets/3d/old_computer.glb";

const Spaceman = ({ scale, position, rotationSpeed }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  // Apply the spinning effect using useFrame
  useFrame((state, delta) => {
    if (spacemanRef.current) {
      spacemanRef.current.rotation.y += rotationSpeed * delta; // Rotate around the Y axis
    }
  });

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].play();
    }
  }, [actions]);

  return (
    <mesh ref={spacemanRef} position={position} scale={scale}>
      <primitive object={scene} />
    </mesh>
  );
};

const SpacemanCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [scale, setScale] = useState([0.5, 0.5, 0.5]); // 25% of the original size
  const [position, setPosition] = useState([0.2, -0.7, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
      const rotationXValue = scrollTop * -0.0006;
      const rotationYValue = scrollTop * -0.00075;
      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([0.25, 0.25, 0.25]); // 25% of the original size
        setPosition([0.2, -0.1, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([0.33, 0.33, 0.33]); // 25% of the original size
        setPosition([0.2, -0.3, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([0.375, 0.375, 0.375]); // 25% of the original size
        setPosition([0.2, -0.4, 0]);
      } else if (window.innerWidth < 1536) {
        setScale([0.415, 0.415, 0.415]); // 25% of the original size
        setPosition([0.2, -0.5, 0]);
      } else {
        setScale([0.5, 0.5, 0.5]); // 25% of the original size
        setPosition([0.2, -0.7, 0]);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas className="w-full h-screen bg-transparent z-10" camera={{ near: 0.1, far: 1000 }}>
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

        <Spaceman
          rotationX={rotationX}
          rotationY={rotationY}
          scale={scale}
          position={position}
          rotationSpeed={0.5} // Adjust this value to control the spinning speed
        />
      </Suspense>
    </Canvas>
  );
};


export default SpacemanCanvas;
