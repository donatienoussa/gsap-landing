"use client"

import { allCocktails, cocktailLists } from '@/constants'
import React, { useRef, useState } from 'react'

const Menu = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const totalCocktails = allCocktails.length;
    const contentRef = useRef<HTMLDivElement>(null);

    const gotoSlide = (index: number) => () => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        
        setCurrentIndex(newIndex)
    }

    const getCocktailAt = (indexOffset: number) => (
        allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    )

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

  
    return (
        <section id="menu" aria-labelledby='menu-heading'>
            <img src="/images/slider-left-leaf.png" alt="l-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="r-leaf" id="m-right-leaf" />

            <h2 id='menu-heading' className='sr-only'>
               CockTail Menu
            </h2>

            <nav className='cocktail-tabs' aria-label="CockTail-Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={cocktail.id}
                            className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
                            onClick={gotoSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className='content'>
                <div className='arrows'> 
                    <button className='text-left' onClick={gotoSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                    </button>
                    
                    <button className='text-left' onClick={gotoSlide(currentIndex +1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                    </button>
                </div>

                <div className='cocktail'>
                    <img
                        src={currentCocktail.image}
                        className='object-contain'
                        alt={currentCocktail.name}
                    />
                </div>

                <div className='recipe'>
                    <div ref={contentRef} className='info'>
                        <p>Recipe for: </p>
                        <p id='title'>{currentCocktail.name}</p>
                    </div>

                    <div className='details'>
                        <h2>{currentCocktail.title}</h2>
                        <p>{ currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu