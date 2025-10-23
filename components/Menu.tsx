"use client";

import { allCocktails } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCocktails = allCocktails.length;
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo(
            ".cocktail img",
            { opacity: 0, xPercent: -100 },
            { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" }
        );
        gsap.fromTo(
            ".details h2",
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
        );
        gsap.fromTo(
            ".details p",
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
        );
    }, [currentIndex]);

    const gotoSlide = (index: number) => () => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    };

    const getCocktailAt = (indexOffset: number) =>
        allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id="menu" className="px-15" aria-labelledby="menu-heading">
            <Image
                src="/images/slider-left-leaf.png"
                alt="feuille gauche"
                id="m-left-leaf"
                width={128}
                height={128}
            />
            <Image
                src="/images/slider-right-leaf.png"
                alt="feuille droite"
                id="m-right-leaf"
                width={128}
                height={128}
            />

            <h2 id="menu-heading" className="sr-only">
                Menu des Cocktails
            </h2>

            <nav className="cocktail-tabs" aria-label="Navigation des cocktails">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            key={cocktail.id}
                            className={`${isActive
                                    ? "text-white border-white"
                                    : "text-white/50 border-white/50"
                                }`}
                            onClick={gotoSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    );
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={gotoSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <Image
                            src="/images/right-arrow.png"
                            alt="flèche droite"
                            aria-hidden="true"
                            width={24}
                            height={24}
                        />
                    </button>

                    <button className="text-left" onClick={gotoSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <Image
                            src="/images/left-arrow.png"
                            alt="flèche gauche"
                            aria-hidden="true"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>

                <div className="cocktail">
                    <Image
                        src={currentCocktail.image}
                        className="object-contain"
                        alt={currentCocktail.name}
                        width={400}
                        height={400}
                    />
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recette de :</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>

                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
