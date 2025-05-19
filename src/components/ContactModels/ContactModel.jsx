import { Canvas } from "@react-three/fiber";
import { Computer } from "./Computer";
import { OrbitControls } from "@react-three/drei";

const ContactModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} color="#fff4e6" />
      <directionalLight intensity={2.5} position={[5, 5, 3]} color="#ffd9b3" />
      <directionalLight intensity={2.5} position={[5, 9, 1]} color="#ffd9b3" />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <group scale={0.03} position={[0, -1.5, -2]}>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactModel;
