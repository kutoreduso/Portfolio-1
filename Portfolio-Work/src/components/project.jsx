import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, date: "EST 2026", img: "img/blank.jpg" },
    { id: 2, date: "EST 2026", img: "img/blank.jpg" },
    { id: 3, date: "EST 2026", img: "img/blank.jpg" },
    { id: 4, date: "EST 2026", img: "img/blank.jpg" },
    { id: 5, date: "EST 2026", img: "img/blank.jpg" },
];

const ProjectSection = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        // Calculate how far we need to move: 
        // (Total width of the strip) minus (the width of the screen)
        const totalWidth = sectionRef.current.offsetWidth;
        const windowWidth = window.innerWidth;
        const scrollDistance = totalWidth - windowWidth;

        const pin = gsap.to(sectionRef.current, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top", // Starts when the top of the section hits the top of the viewport
                end: () => `+=${scrollDistance}`, // The scroll length now perfectly matches the content width
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true, // Recalculates if user resizes the window
            },
        });

        return () => {
            pin.kill();
        };
    }, []);

    return (
        <section ref={triggerRef} className="overflow-hidden bg-white">
            {/* Intro Text */}
            <div className="p-5 md:p-12 lg:p-10 space-y-2 bg-white">
                <h1 className="uppercase lg:text-4xl font-bold tracking-tighter text-4xl font-satoshi">
                    Our Project
                </h1>
                <hr className="lg:w-full md:w-full w-full border-black" />
                <p className="lg:text-3xl text-2xl text-justify font-satoshi">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ut? Accusamus amet laudantium optio officia, obcaecati delectus deserunt quidem dolore cupiditate maiores laboriosam aliquam ipsum harum, magnam voluptatibus cumque? Vero expedita quis alias. Nobis ullam, cupiditate enim est esse expedita maiores vitae quasi, itaque placeat ut atque. Doloremque, esse mollitia!
                </p>
            </div>

            {/* Horizontal Moving Part */}
            <div 
                ref={sectionRef} 
                className="flex flex-nowrap gap-6 p-5 md:p-12 lg:p-10 w-max font-satoshi"
            >
                {projects.map((project) => (
                    <div 
                        className="shrink-0 w-[85vw] md:w-[40vw] lg:w-[30vw]" 
                        key={project.id}
                    >
                        <div className="aspect-square overflow-hidden bg-gray-200">
                            <img 
                                src={project.img}
                                alt={`Project ${project.id}`}
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        </div>
                        <p className="mt-2 font-satoshi uppercase">{project.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;