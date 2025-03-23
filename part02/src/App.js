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

function Model(props){
  const earth = useLoader( GLTFLoader, "/models/earth.glb" );
  return(
    <mesh {...props}>
      <primitive object={earth.scene}/>
    </mesh>
  )
}

function Lights(){
  // const ref = useRef();
  // useHelper(ref, DirectionalLightHelper, 1, "red");
  return(
    // <directionalLight ref={ref} position={[1, 3, -1]} intensity={3}/>
    <directionalLight position={[1, 3, -1]} intensity={3}/>
  )
}

function App() {
  return (
    <Canvas camera={{position: [0, 1, 5]}}>
        <color attach="background" args={["yellow"]}></color>
        <Lights/>
        {/* <Box rotation-y={1}/>
        <Box position={[0, 0, -1]} rotation-y={1}/> */}
        <Model position={[0, -1, 0]}/>
    </Canvas>
  );
}

export default App;
