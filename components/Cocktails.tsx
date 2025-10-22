'use client'

import { cocktailLists, mockTailLists } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Cocktails = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#cocktails',
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: true,
                },
            })

            tl.from('#c-left-leaf', {
                x: -150,
                y: 100,
                opacity: 1,
                rotate: -15,
                scale: 0.8,
                duration: 1.5,
                ease: 'power3.out',
            }).from('#c-right-leaf', {
                x: 150,
                y: 100,
                opacity: 1,
                rotate: 15,
                scale: 0.8,
                duration: 1.5,
                ease: 'power3.out',
            }, '<') // '<' = simultané
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            id="cocktails"
            ref={sectionRef}
            className="noisy relative overflow-hidden py-20"
        >
            {/* Feuilles positionnées */}
            <img
                src="/images/cocktail-left-leaf.png"
                alt="feuille gauche"
                id="c-left-leaf"
                className="absolute top-0 left-0 w-32 md:w-48 z-10"
            />
            <img
                src="/images/cocktail-right-leaf.png"
                alt="feuille droite"
                id="c-right-leaf"
                className="absolute top-0 right-0 w-32 md:w-48 z-10"
            />

            <div className="list relative z-20">
                <div className="popular mb-10">
                    <h2 className="font-bold text-2xl mb-4">Nos boissons populaires</h2>
                    <ul className="space-y-4">
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="drink flex justify-between items-start">
                                <div className="md:me-28">
                                    <h3 className="font-semibold">{name}</h3>
                                    <p className="text-sm text-gray-600">{country} | {detail}</p>
                                </div>
                                <span className="font-bold">{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="popular">
                    <h2 className="font-bold text-2xl mb-4">Nos boissons les plus aimées</h2>
                    <ul className="space-y-4">
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="drink flex justify-between items-start">
                                <div className="md:me-28">
                                    <h3 className="font-semibold">{name}</h3>
                                    <p className="text-sm text-gray-600">{country} | {detail}</p>
                                </div>
                                <span className="font-bold">{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails
