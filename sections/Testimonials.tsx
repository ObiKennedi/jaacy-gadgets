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
  {
    name: "Kelvin U.",
    role: "Gamer",
    review:
      "Ordered a gaming mouse and keyboard combo — arrived faster than I expected and works perfectly. Customer service was polite too.",
  },
  {
    name: "Ruth I.",
    role: "Banker",
    review:
      "Smooth transaction from start to finish. I like that they respond quickly on WhatsApp. My new smartwatch is exactly what I wanted.",
  },
  {
    name: "David E.",
    role: "Photographer",
    review:
      "Found Jaacyy’s through Instagram — best decision ever. My camera accessories came well packaged and on time. Definitely ordering again.",
  },
  {
    name: "Chisom N.",
    role: "Student, IMSU",
    review:
      "Affordable and reliable! My phone was delivered in great condition and I even got a free case. Thanks Jaacyy’s",
  },
  {
    name: "Michael T.",
    role: "Software Engineer",
    review:
      "Appreciate the honesty — no fake products, no delays. The entire experience felt smooth and professional.",
  },
  {
    name: "Blessing K.",
    role: "Entrepreneur",
    review:
      "Jaacyy’s Gadgets gives that premium feel without the premium price. My tablet works perfectly and the packaging was clean and classy.",
  },
];

export const Testimonial = () =>{
    return(
        <section className="testimonials-section">
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
