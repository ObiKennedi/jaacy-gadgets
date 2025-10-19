import { TestimonyCards } from "@/components/TestimonyCards";
import "@/style/Testimonials.scss"

export const testimonials = [
  {
    name: "Emeka A.",
    role: "Student, UNILAG",
    review:
      "Got my phone from Jaacyy’s and it arrived in less than 48 hours! Everything was brand new and exactly as described. Definitely my go-to plug for gadgets.",
  },
  {
    name: "Lydia O.",
    role: "Small Business Owner",
    review:
      "I was skeptical at first, but Jaacyy’s service blew me away. Fast delivery, fair prices, and amazing customer support. Highly recommend!",
  },
  {
    name: "Tunde B.",
    role: "Graphic Designer",
    review:
      "The Bluetooth headset I got was top-notch. Great sound quality and sleek design — and they even followed up to make sure I was satisfied.",
  },
  {
    name: "Sarah M.",
    role: "Tech Enthusiast",
    review:
      "I love how Jaacyy’s always stocks the latest devices. You can tell they really care about quality, not just selling stuff.",
  },
];

export const Testimonial = () =>{
    return(
        <section className="testimonials-section" id="testimonial">
            <h2>What our customer&apos;s have to say</h2>
            <div>
                {testimonials.map((item, index)=>(
                    <TestimonyCards
                        key={index}
                        role={item.role}
                        name={item.name}
                        testimony={item.review}
                    />
                ))}
            </div>
        </section>
    )
}
