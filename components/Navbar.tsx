'use client';

import { navLinks } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        })

        navTween.fromTo('nav',
            { backgroundColor: 'transparent' },
            { 
                backgroundColor: '#00000050',
                backgroundFilter: 'blur(10px)',
                duration: 1, 
                ease: 'power1.inOut'
            }
        )
    })
  
    return (
        <nav>
            <div>
                <a className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="Logo" width={32} height={32} />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar















// import { navLinks } from "@/constants"
// import Image from "next/image"

// export const Navbar = () => {

//     return (
//         <header className="">
//             <div className="flex justify-between items-center py-6 px-6">
//                 {/** Logo */}
//                 <div className="flex justify-center items-center gap-3">
//                     <Image src="/images/fav.png" alt="Logo" width={32} height={32} />
//                     <p className="font-modern-negra text-2xl">Velvet Pour</p>
//                 </div>

//                 {/** Menu */}
//                 <div className="">
//                     <ul className="flex gap-2 px-12">
//                         {navLinks.map((link) => (
//                             <li key={link.id} className="text-xl  px-6">
//                                 <a href={`#${link.id}`}>{link.title}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </header>
//    )
//  }
