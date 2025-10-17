import { LandingNav } from "@/components/LandingNav"
import { About } from "@/sections/about"
import { Hero } from "@/sections/hero"
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
        <Testimonial/>
      </main>
    </>
  )
}

export default Home