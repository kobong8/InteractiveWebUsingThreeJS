import { useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function Weather(props) {
    const { position, weather } = props;
    const glb = useLoader(GLTFLoader, "/models/weather.glb");

    // TODO useRef 확인
    const ref = useRef(null);

    // TODO useMemo의 역할
    const weatherModel = useMemo(() => {
        const clonedModel = glb.nodes[weather] || glb.nodes.cloud;
        return clonedModel.clone();
    }, [weather]);
    // TODO React Hook useMemo has a missing dependency: 'glb.nodes'.

    useFrame((_, delta) => {
        ref.current.rotation.y += delta;
    });

    return (
        // TODO ref={ref}
        <mesh ref={ref} position={position}>
            <primitive object={weatherModel} />
        </mesh>
    );
}

// TODO 코드 작성 방식 차이
// const Weather = (props) => {
//     const { position, weather } = props;
//     const glb = useLoader(GLTFLoader, '/models/weather.glb')

//     const weatherModel = useMemo(() => {
//         const clonedModel = glb.nodes[weather] || glb.nodes.cloud
//         return clonedModel.clone()
//     }, [weather])

//     return(
//         <mesh position={position}>
//             <primitive object={weatherModel} />
//         </mesh>
//     )
// }

// export default Weather;
