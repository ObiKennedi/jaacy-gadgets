import { LandingFooter } from "@/components/LandingFooter"
import { LandingNav } from "@/components/LandingNav"
import { About } from "@/sections/about"
import { Hero } from "@/sections/hero"
import  Contact  from "@/sections/Contact"
import { Testimonial } from "@/sections/Testimonials"
import { ValueProp } from "@/sections/ValueProp"

import "@/style/globals.scss"

const Home = () =>{
  return(
    <>
      <LandingNav/>
      <main>
        <Hero/>        
        <About/>
        <ValueProp/>
        <Contact />
        <Testimonial/>
      </main>
      <LandingFooter/>
    </>
  )
}

export default Home