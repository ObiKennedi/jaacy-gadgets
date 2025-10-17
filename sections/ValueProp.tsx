import ValueCard from "@/components/ValueCard";
import { ShieldCheck, Truck, Headphones, Smartphone } from "lucide-react";

import "@/style/ValueProps.scss"

const valueProps = [
  {
    icon: Smartphone,
    title: "Top-Quality Devices",
    text: "We bring you only verified, high-performance gadgets built to last.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    text: "Enjoy quick nationwide delivery with real-time tracking updates.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    text: "Shop confidently with our end-to-end encrypted payment system.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "Our support team is always ready to assist you — day or night.",
  },
];

export const ValueProp = () =>{
    return(
        <section className="value-props">
            <h2>Why choose Jaacyy&apos;s Gadgets</h2>
            <div>{valueProps.map((item, index)=>(
                <ValueCard
                    icon={item.icon}
                    text={item.text}
                    title={item.title}
                    key={index}
                />
            ))}</div>
        </section>
    )
}