

const ServiceSection = () => {


    return(
        <>
            <div className="p-5 md:p-12 lg:p-10 space-y-10 font-satoshi">
                <div className="flex flex-col items-start gap-2">
    
    <h1 className="uppercase lg:text-4xl font-bold tracking-tighter text-4xl md:">
        Our Services
    </h1>
    <hr className="lg:w-70 md:w-full w-full border-black" />
</div>
    <div className=" justify-between flex relative space-x-5 space-y-5 shrink-0 md:flex-col flex-col lg:flex-row">
       <div className="text-justify lg:w-260 md:w-full w-full">

         <p className="lg:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ab cum corporis labore quas, assumenda obcaecati nesciunt dolores impedit vero illo quidem inventore possimus perferendis ut pariatur, quia omnis. Possimus minus facere deserunt placeat eius voluptates consectetur laboriosam at non sequi distinctio, illum assumenda voluptas quidem! Quo pariatur voluptate voluptatibus.</p>
         <p className="lg:text-2xl mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ab cum corporis labore quas, assumenda obcaecati nesciunt dolores impedit vero illo quidem inventore possimus perferendis ut pariatur, quia omnis. Possimus minus facere deserunt placeat eius voluptates consectetur laboriosam at non sequi distinctio, illum assumenda voluptas quidem! Quo pariatur voluptate voluptatibus.</p>
       </div>
        
    <div className=""></div>
    <img 
    src="/img/2.jpg"
    alt=""
    className="object-cover items-end lg:w-180 aspect-square"
    />
    </div>





            </div>
        </>

    )

}

export default ServiceSection