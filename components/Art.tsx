"use client"

import { featureLists, goodLists } from '@/constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React from 'react'
import { useMediaQuery } from 'react-responsive';

function Art() {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    
    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top"; 

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art", 
                start, 
                end: "bottom center",
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeline 
            .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" }, 0)
            .to(".masked-img", {
                scale: 1.3,
                maskPosition: "center",
                maskSize: "400%",
                duration: 1, 
                ease: "power1.inOut"
            })
            .to(".masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut"
            })

    })
 
    return (
        <div id="art">
            <div className='container mx-auto h-full pt-20'>
                <h2 className='will-fade'>L&apos;ART</h2>

                <div className='content'>
                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((feature, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <Image src="/images/check.png" alt="check" width={16} height={16} />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <div className='cocktail-img'>
                        <Image
                            src="/images/under-img.jpg"
                            alt="cocktail"
                            className='abs-center masked-img size-full object-contain'
                            width={500}
                            height={500}
                        />
                    </div>

                    <ul className='space-y-4 will-fade'>
                        {featureLists.map((feature, index) => (
                            <li key={index} className='flex items-center justify-start gap-2'>
                                <Image src="/images/check.png" alt="check" width={16} height={16} />
                                <p className='md:w-fit w-60'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="masked-container">
                    <h2 className='will-fade'>Une perfection à savourer</h2>

                    <div className="masked-content">
                        <h3>Préparé avec art, servi avec passion</h3>
                        <p>
                            Ce n’est pas qu’une simple boisson. C’est un moment soigneusement
                            élaboré, créé spécialement pour vous.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art