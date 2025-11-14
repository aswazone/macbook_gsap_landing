import React from 'react'
import {Environment, Lightformer} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name='lights'>
            <Environment resolution={256}>
                <group>
                    <Lightformer
                        form='rect'
                        intensity={10}
                        position={[-10, 5, -5]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotLight
                position={[0, 20, 10]}
                angle={0.15}
                decay={0.3}
                intensity={Math.PI * 4}
            />

        </group>
    )
}
export default StudioLights
