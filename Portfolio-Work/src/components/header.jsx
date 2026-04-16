import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';


gsap.registerPlugin(SplitText);
const HeaderSection = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // 1. Create the split
    const headsplit = new SplitText(".headersplit", {
      type: "words",
    });

    // 2. Animate the WORDS specifically
    gsap.from(headsplit.words, {
      duration: 0.8,
      opacity: 0,
      y: 40,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });

    // Cleanup to prevent memory leaks/double splitting in Strict Mode
    return () => headsplit.revert();
  }, []);
    return(
        <>
        <div ref={containerRef} className="p-5 md:p-12 lg:p-16">
      <h1 className="headersplit uppercase font-semibold font-satoshi lg:text-9xl lg:w-10 leading-none w-10 text-6xl md:text-8xl">
         Creative Arch
      </h1>
    </div>
        <div className="imgappear lg:w-300 md:w-150 mx-auto aspect-auto lg:mt-2 lg:h-140 overflow-hidden h-80">
  <img 
    src="/img/2.jpg" 
    alt="Project Image"
    className="w-full h-full object-cover" 
  />
</div>
<div ref={containerRef} className="p-5 md:p-12 lg:p-10 lg:justify-between relative flex flex-col-reverse lg:flex-row lg:items-end lg:mt-10 mt-15 text-black md:flex-row md:items-end md:justify-between">
    <div className="">
        <h1 className="headersplit uppercase font-satoshi lg:text-3xl md:text-2xl">Based in Philippines</h1>
    </div>
    <h1 className="headersplit uppercase font-satoshi text-[20px] lg:text-3xl md:text-2xl lg:w-80 w-50 md:w-60 text-justify">System Ideas and Design i will build for you</h1>
</div>

        </>

    )

}

export default HeaderSection