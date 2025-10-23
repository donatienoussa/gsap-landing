"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
    
    useGSAP(() => {
	const titleSplit = SplitText.create('#about h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	    scrollTrigger: {
		    trigger: '#about',
		    start: 'top center'
        },
        onComplete: () => {
            // 🔥 Restaure le texte original après l’animation
            titleSplit.revert();
        },
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
    }, '-=0.5')
    
 })
 

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content space-y-8">
                    <div className="md:col-span-8">
                        <p className="badge text-black-400 uppercase tracking-wide">
                            Meilleurs Cocktails
                        </p>
                        <h2 className="text-5xl md:text-6xl font-modern-negra max-w-lg">
                            Là où chaque détail compte{" "}
                            <span className="text-black-500">–</span> du mélange à la touche
                            finale
                        </h2>
                    </div>

                    <div className="sub-content flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <p className="md:w-3/4 text-white/90 leading-relaxed">
                            Chaque cocktail que nous préparons reflète notre passion du détail
                            — du premier mélange à la dernière garniture. Ce soin transforme
                            une simple boisson en une expérience gustative inoubliable.
                        </p>

                        <div>
                            <p className="md:text-3xl text-xl font-bold text-amber-400">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white/70">
                                Plus de 1000 clients satisfaits
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy z-5" />
                    <Image src="/images/abt1.png" alt="grid-img-1" fill />
                </div>

                <div className="md:col-span-6">
                    <div className="noisy z-5" />
                    <Image src="/images/abt2.png" alt="grid-img-2" fill />
                </div>

                <div className="md:col-span-3">
                    <div className="noisy z-5" />
                    <Image src="/images/abt5.png" alt="grid-img-5" fill />
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8">
                    <div className="noisy z-5" />
                    <Image src="/images/abt3.png" alt="grid-img-3" fill />
                </div>

                <div className="md:col-span-4">
                    <div className="noisy z-5" />
                    <Image src="/images/abt4.png" alt="grid-img-4" fill />
                </div>
            </div>
        </div>
    );
};

export default About;
