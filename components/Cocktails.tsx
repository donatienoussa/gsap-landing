"use client"

import { cocktailLists, mockTailLists } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Cocktails = () => {
    const sectionRef = useRef(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#cocktails',
                    start: 'top 30%',
                    end: 'bottom 80%',
                    scrub: true,
                },
            })

            tl.from('#c-left-leaf', { x: -100, y: 100 })
                .from('#c-right-leaf', { x: -100, y: 100 })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="cocktails" ref={sectionRef} className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Popular Cocktails</h2>
                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="drink">
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="popular">
                    <h2>Must loved mocktails</h2>
                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name} className="drink">
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails
