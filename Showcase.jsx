import React from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger so it becomes active inside GSAP
gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    useGSAP(() => {
        if (!isTablet) {
            // ===========================
            // CREATE A SCROLL-BASED TIMELINE
            // ===========================
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    // 🟦 trigger:
                    // The DOM element ScrollTrigger watches.
                    // The animation starts when this section enters the viewport.

                    start: "top top",
                    // 🟩 start:
                    // "top of trigger" meets "top of viewport".
                    // Perfect for animations that begin when a section (#showcase) hits top screen.

                    end: "bottom top",
                    // 🟧 end:
                    // Animation ends when the section's bottom hits top of viewport.
                    // Defines the scroll distance that controls the animation.

                    scrub: 1.2,
                    // 🟪 scrub:
                    // Links animation progress to scroll position.
                    // 1.2 = smoothing delay to make animations buttery smooth.

                    pin: true,
                    // 🟥 pin:
                    // Freezes the section in place during the animation.
                    // Classic Apple-style product showcase effect.

                    anticipatePin: 1,
                    // 🟨 anticipatePin:
                    // Prevents layout jumps when pinning starts.
                },
            });

            // ===========================
            // 1. PARALLAX EFFECT FOR VIDEO
            // ===========================
            tl.to(".media video", {
                yPercent: -20,
                // Moves video upward relative to its height
                // Creates a subtle cinematic parallax effect

                ease: "none",
                // No easing → ensures natural scrolling behavior
            });

            // ===========================
            // 2. LOGO MASK ZOOM
            // ===========================
            tl.to(
                ".mask img",
                {
                    scale: 1.15,
                    // Clean zoom animation, similar to Apple product sections

                    ease: "none",
                    // Linear zoom for professional, smooth appearance
                },
                0
                // Start at same time as parallax (parallel animations)
            );

            // ===========================
            // 3. CONTENT FADE + SLIDE UP
            // ===========================
            tl.fromTo(
                ".content",
                {
                    opacity: 0,
                    // Start invisible

                    y: 40,
                    // Start slightly lower → natural reveal feel
                },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    // power2.out easing → smooth entrance animation
                }
            );
        }
    }, []);

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" playsInline autoPlay loop muted />

                <div className="mask">
                    <img src="/mask-logo.svg" alt="Mask Logo" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing <span className="text-white">M4</span>, the next
                                generation…
                            </p>
                            <p>
                                It drives Apple Intelligence on iPad Pro, so you can write,
                                create…
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>

                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
