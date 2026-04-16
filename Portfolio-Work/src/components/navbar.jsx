const NavbarSection = () => {
  return (
    <>
      <div className="flex flex-nowrap relative justify-between md:p-5 p-5 font-satoshi font-bold container mx-auto items-center">
        <h1 className="uppercase tracking-tighter">
          CreativeArch
        </h1>

        <div className="flex">
          {/* MOBILE: Only shows "MENU" on small screens */}
          <button className="md:hidden uppercase cursor-pointer">
            Menu
          </button>

          {/* DESKTOP: Hidden on mobile, flexes on md screens and up */}
          <ul className="hidden md:flex flex-row uppercase font-satoshi space-x-7">
            <li className="cursor-pointer hover:opacity-70 transition-opacity">Service</li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">About</li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarSection;