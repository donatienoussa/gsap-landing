"use client"

import { openingHours, socials } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

const Contact = () => {

    useGSAP(() => {
        const textSplit = SplitText.create('.content h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        })

        timeline
            .from(textSplit.words, { yPercent: 100, opacity: 0, stagger: 0.02 })
            .from("#contact h3, #contact p", { opacity: 0, yPercent: 100, stagger: 0.02 })
            .to('#f-right-leaf', { y: '-50', duration: 0.5, ease: 'power1.inOut' })
            .to('#f-left-leaf', { y: '-50', duration: 0.5, ease: 'power1.inOut' }, "<")
    })

    return (
        <footer id="contact">
            <img src="images/footer-right-leaf.png" alt="feuille droite" id="f-right-leaf" />
            <img src="images/footer-left-leaf.png" alt="feuille gauche" id="f-left-leaf" />

            <div className='content'>
                <h2>Où nous trouver </h2>

                <div>
                    <h3>Visitez notre bar</h3>
                    <p>456, Boulevard Raq #404, Los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contactez-nous</h3>
                    <p>(555) 987-6543</p>
                    <p><a href="mailto:hello@jsmcocktail.com">hello@jsmcocktail.com</a></p>
                </div>

                <div>
                    <h3>Heures d’ouverture</h3>
                    {openingHours.map((item) => (
                        <p key={item.day}>
                            <span>{item.day} :</span> {item.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Réseaux sociaux</h3>

                    <div className='flex-center gap-2'>
                        {socials.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                            >
                                <img src={item.icon} alt={item.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
