"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import "@/style/LandingFooter.scss"
import { } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";

export const LandingFooter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const result = await emailjs.sendForm(
                "service_ot793np", 
                "template_evrg1gu", 
                formRef.current!,
                "W818QjzEI61Uw8ju7"
            );

            if (result.text === "OK") {
                setStatus("Subscribed!");
                setEmail("");
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            console.error(error);
            setStatus("Error, try again");
        } finally {
            setTimeout(() => setStatus(""), 3000);
        }
    };
    return (
        <footer className="landing-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Image
                        src={"/logo/jaacys-logo.png"}
                        width={400}
                        height={240}
                        alt="logo"
                    />
                    <p>Your one stop store for, high-impact and world-class phones, gadgets, and smart devices.</p>
                </div>
                <div className="quick-links">
                    <h2>Quick links</h2>
                    <div>
                        <Link href={"#"}>Home</Link>
                        <Link href={"#about"}>About</Link>
                        <Link href={"#contact"}>Contact</Link>
                        <Link href={"#testimonial"}>Testimonials</Link>
                    </div>
                </div>
                <div className="socials">
                    <h3>Reach out to us on:</h3>
                    <div>
                        <a href="/fb">
                            <FaFacebook size={24} />
                        </a>
                        <a href="/ig">
                            <FaInstagram size={24} />
                        </a>
                        <a href="/linkedin">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="/tiktok">
                            <FaTiktok size={24} />
                        </a>
                        <a href="/x">
                            <FaXTwitter size={24} />
                        </a>
                    </div>
                </div>
                <form className="subscribe" ref={formRef} onSubmit={handleSubmit}>
                    <h2>Stay in touch</h2>
                    <div>
                        <input 
                            type="email" 
                            name="user_email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" 
                        />
                        <button>Subscribe</button>
                    </div>
                    {status && <p className="status">{status}</p>}
                </form>
            </div>
            <hr />
            <div className="rights">
                <p>&copy; {new Date().getFullYear()} Jaacyy&apos;s Gadgets. All rights reserved</p>
                <p>Built by <a href="dexter-lahb.com">Dexter&apos;s Lahb</a></p>
            </div>
        </footer>
    )
}