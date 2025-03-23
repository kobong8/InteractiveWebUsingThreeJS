import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

function Model(){
  const glb = useLoader( GLTFLoader, "/models/earth.glb" )
  console.log(glb)
  return(
    <></>
  )
}

function Box() {
  return(
    <mesh>
      <boxGeometry args={[1]}/>
      <meshBasicMaterial color={"hotpink"}/>
    </mesh>
  )
}

function App() {
  console.log("Canvas")
  return (
    <Canvas>
        <color attach="background" args={["yellow"]}></color>
        <Model/>
    </Canvas>
  );
}

export default App;
