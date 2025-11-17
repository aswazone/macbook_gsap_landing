import React, {useEffect, useRef} from 'react'

const Hero = () => {

    //for more control over the hero-video
    const videoRef = useRef(null);

    //for do crazy actions
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2; //for control speed!
    }, []);

    return (
        <section id={'hero'}>
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="Macbook Title"/>
            </div>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
            <button>Buy</button>
            <p>From  ₹1,19,990 or  ₹11,665/mo for 12 months</p>
        </section>
    )
}
export default Hero
