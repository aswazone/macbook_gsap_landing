import React, {useRef} from 'react'
import {PresentationControls} from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";

const ModelSwitcher = ({ scale , isMobile }) => {

    const smallMacbookRef = useRef(null);
    const largeMacbookRef = useRef(null);

    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    const controlsConfig = {
        // global: false, // Spin globally or by dragging the model
        // cursor: true, // Whether to toggle cursor style on drag
        snap: true,   // its helps to return that model's original position when I leave the grab.
        speed: 2,     // its helps to control speed of models when we interact with them.
        zoom: 1,      // its helps to zoom when grab the model to its normal.
        polar: [-Math.PI / 2,Math.PI / 2], // it is the vertical limit to define.
        azimuth: [-Infinity, Infinity],    // it is the horizontal limit to define.
        config: { mass: 1, tension: 0, friction: 26 }, // its helps to give actual physics to it.. nalla kanam thonnum.
    }

    // --- My reference related to Three-Drei study
    //https://codesandbox.io/p/sandbox/qyz5r?file=%2Fsrc%2FApp.js%3A24%2C10-24%2C15

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
                </group>
            </PresentationControls>
            {/*<PresentationControls {...controlsConfig}>*/}
            {/*    <group ref={largeMacbookRef}>*/}
            {/*        <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>*/}
            {/*    </group>*/}
            {/*</PresentationControls>*/}
        </>
    )
}
export default ModelSwitcher

