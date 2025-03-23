import { useHelper } from "@react-three/drei"
import { Canvas, useLoader } from "@react-three/fiber"
import { useRef } from "react"
import { DirectionalLightHelper } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

function Box(props) {
  return(
    <mesh {...props}>
      <boxGeometry args={[1]}/>
      {/* <meshBasicMaterial color={"hotpink"}/> */}
      <meshStandardMaterial color={"hotpink"} wireframe/>

    </mesh>
  )
}

function Model(){
  const glb = useLoader( GLTFLoader, "/models/earth.glb" );
  console.log(glb);
  return(
    <></>
  )
}

function Lights(){
  const ref = useRef();
  useHelper(ref, DirectionalLightHelper, 1, "red");
  return(
    <directionalLight ref={ref} position={[1, 3, -1]} intensity={3}/>
  )
}

function App() {
  return (
    <Canvas camera={{position: [0, 1, 2]}}>
        <color attach="background" args={["yellow"]}></color>
        <Lights/>
        <Box rotation-y={1}/>
        <Box position={[0, 0, -1]} rotation-y={1}/>
    </Canvas>
  );
}

export default App;
