import React, {useRef} from 'react'
import {PresentationControls} from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

// making utility function always better for standardizing codebase !! // ingane indakkiyal nalla control kittum.
const fadeMeshes = (group, opacity) =>{
    if(!group) return;
    group.traverse((child)=>{
        if(child.isMesh){
            if(!child.material.transparent) {
                child.material.transparent = true;
            }
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
        }
    })
}
const moveGroups = (group, x) =>{
    if(!group) return;
    gsap.to(group.position, { x, duration: ANIMATION_DURATION });
}



const ModelSwitcher = ({ scale , isMobile }) => {

    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;
    const SCALE_SMALL_DESKTOP = 0.06;
    const SCALE_SMALL_MOBILE = 0.03
    const smallMacbookRef = useRef(null);
    const largeMacbookRef = useRef(null);

    const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    useGSAP(()=>{
        if(showLargeMacbook){
            moveGroups(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroups(largeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(largeMacbookRef.current, 1);
        }else{
            moveGroups(smallMacbookRef.current, 0);
            moveGroups(largeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(largeMacbookRef.current, 0);

        }
    },[scale])

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
                    <MacbookModel16 scale={isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP}/>
                </group>
            </PresentationControls>
            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? SCALE_SMALL_MOBILE : SCALE_SMALL_DESKTOP}/>
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher

