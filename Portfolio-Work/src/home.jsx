import HeaderSection from "./components/header"
import NavbarSection from "./components/navbar"
import IntroSection from "./components/introduction"
import ServiceSection from "./components/service"
import ProjectSection from "./components/project"
import ContactSection from "./components/contact"
const HomeSection = () => {

    return(
        <>
        <NavbarSection/>
        <HeaderSection/>
        <IntroSection/>
        <ServiceSection/>
        <ProjectSection/>
        <ContactSection/>
        </>
    )


}

export default HomeSection