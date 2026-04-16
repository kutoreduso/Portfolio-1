

const IntroSection = () => {

    return(
        <>
<div className="p-5 md:p-12 lg:p-10">
    <p className="text-justify text-[20px] text-black font-satoshi md:text-2xl lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ut neque at porttitor.Proin elementum metus non blandit bibendum. In convallis suscipit semper. Maecenas imperdiet metus sed quam consequat.</p>
    <div className="mt-5 font-bold font-satoshi">
    <div className="lg:w-250 md:w-full md:h-120 md:mx-auto aspect-auto lg:mt-2 lg:h-140 overflow-hidden h-80 lg:mr-auto lg:ml-0 ">
        <h1 className="text-start lg:text-end font-bold lg:text-3xl md:text-end md:text-2xl">EST 2026</h1>
        <img src="/img/2.jpg" 
    alt="Project Image"
    className="w-full h-full object-cover" 
        />

    </div>
    </div>
</div>
        
        </>
        
    )


}

export default IntroSection