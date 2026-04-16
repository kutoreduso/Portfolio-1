
const HeaderSection = () => {

    return(
        <>
        <div className="p-5 md:p-12 lg:p-16 space-y-10">
            <h1 className="uppercase font-semibold font-satoshi lg:text-9xl lg:w-10 leading-none w-10 text-6xl md:text-8xl">Project Name</h1>
           

        </div>
        <div className="lg:w-300 md:w-150 mx-auto aspect-auto lg:mt-2 lg:h-140 overflow-hidden h-80">
  <img 
    src="/img/2.jpg" 
    alt="Project Image"
    className="w-full h-full object-cover" 
  />
</div>
<div className="p-5 lg:justify-between relative flex flex-col-reverse lg:flex-row lg:items-end lg:pl-8 lg:mt-10 mt-15 text-black md:flex-row md:items-end md:justify-between">
    <div className="">
        <h1 className="uppercase font-satoshi font-bold lg:text-3xl md:text-3xl">Based in Philippines</h1>
    </div>
    <h1 className="uppercase font-satoshi text-[20px] lg:text-3xl md:text-3xl lg:w-80 w-50 md:w-80 ">System Ideas and Design i will build for you</h1>
</div>
<div className="p-5">
    <p className="text-justify text-[20px] text-black font-satoshi font-bold md:text-2xl lg:w-150">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie ut neque at porttitor.Proin elementum metus non blandit bibendum. In convallis suscipit semper. Maecenas imperdiet metus sed quam consequat.</p>
    <div className="mt-5 font-bold font-satoshi">
    <div className="lg:w-200 md:w-full md:h-120 md:mx-auto aspect-auto lg:mt-2 lg:h-140 overflow-hidden h-80 lg:mr-auto lg:ml-0 ">
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

export default HeaderSection