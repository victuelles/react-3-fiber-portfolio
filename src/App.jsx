import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { config } from "./config";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0.5, 5], fov: 42 }}>
         {/* <OrbitControls  />   */}
        <color attach="background" args={["#f5f3ee"]} />
        <fog attach="fog" args={["#f5f3ee", 10, 50]} />
        {/* <ambientLight intensity={.1} /> */}
        <ScrollControls pages={config.sections.length} damping={0.1} maxSpeed={0.2}>
          <group position-y={-1}>
            <Experience />
          </group>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
