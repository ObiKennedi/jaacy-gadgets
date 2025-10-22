import { LandingNav } from "@/components/LandingNav"
import { LandingFooter } from "@/components/LandingFooter";
import Contact  from "@/sections/Contact"


const ContactPage = () => {
    return(
        <>
            <LandingNav />
            <main style={{marginTop: "70px"}}>
                <Contact />
            </main>
            <LandingFooter />
        </>
    )
}
export default ContactPage