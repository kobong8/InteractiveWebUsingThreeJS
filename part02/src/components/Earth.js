import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Earth() {
    const glb = useLoader(GLTFLoader, "/models/earth.glb");

    const ref = useRef(null);

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.1;
    });

    return (
        <mesh
            ref={ref}
            scale={1.3}
            rotation-y={Math.PI / 2}
            position={[0, -2, 0]}
        >
            <primitive object={glb.scene} />
        </mesh>
    );
}
