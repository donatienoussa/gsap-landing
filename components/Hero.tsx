'use client';

import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText('.title', {
            type: 'chars, words',
        });

        const paragraphSplit = new SplitText('.subtitle', {
            type: 'lines',
        });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)
            .to('.arrow', { y: 100 }, 0);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const onLoaded = () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: video,
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true,
                },
            }).to(video, {
                currentTime: video.duration,
                ease: 'none',
            });
        };

        if (video.readyState >= 1) {
            onLoaded();
        } else {
            video.onloadedmetadata = onLoaded;
        }

        return () => {
            video.onloadedmetadata = null;
        };
    }, [isMobile]);

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">VINTAGE</h1>

                <img
                    src="/images/hero-left-leaf.png"
                    alt="feuille-gauche"
                    className="left-leaf"
                />

                <img
                    src="/images/hero-right-leaf.png"
                    alt="feuille-droite"
                    className="right-leaf"
                />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p className="text-xl font-bold">Cool. Classe. Authentique.</p>
                            <p className="subtitle">Savourez nos <br /> boissons</p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Chaque cocktail que nous servons reflète notre passion du détail — du premier mélange jusqu’à la dernière touche décorative.
                                Ce soin transforme une simple boisson en une expérience inoubliable.
                            </p>

                            <a href="#cocktails">Découvrir nos cocktails</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </>
    );
};

export default Hero;
