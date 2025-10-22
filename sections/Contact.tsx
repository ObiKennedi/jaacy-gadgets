"use client";

import React, { useState, useRef} from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMap, FaFacebookF, FaInstagram, FaTiktok, FaXTwitter, FaLinkedinIn, } from "react-icons/fa6";
import "@/style/ContactSection.scss";


const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const handleTextareaResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = e.target;
        const defaultHeight = 100;
        const maxHeight = defaultHeight * 2;
        textarea.style.height = "auto"
        if (textarea.scrollHeight <= maxHeight){
            textarea.style.height = `${textarea.scrollHeight}px`
            textarea.style.overflowY = "hidden"
        }else {
            textarea.style.height = `${maxHeight}px`
            textarea.style.overflowY ="auto"
        }
        handleChange(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSending) return
        setIsSending(true)
        setStatus("Sending...")

        try {
            const result = await emailjs.sendForm(
                "service_ot793np",
                "template_evrg1gu",
                formRef.current!,
                "W818QjzEI61Uw8ju7"
            )
            if (result.text === "OK"){
                setStatus("Message Sent")
                setTimeout(() => {
                    setFormData({ name: "", email: "", message: ""})
                    setStatus("")
                }, 2500)
            } else {
                throw new Error("Failed to send")
            }
        } catch (error) {
            console.error(error);
            setStatus("Try again")
            setTimeout(() => setStatus(""), 3000)
        } finally {
            setIsSending(false)
        }
    };

    return (
        <section className="contact-section" >
            <video autoPlay muted loop playsInline className="background-video">
                <source src="/video/gvid2.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
            <h2 className="section-title" data-aos="fade-up">Get in Touch</h2>
            <div className="contact-container">
                <form className="contact-form" ref={formRef} onSubmit={handleSubmit} data-aos="fade-right" data-aos-duration="1000">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        ref={textareaRef}
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleTextareaResize}
                        required
                    ></textarea>
                    <button type="submit" disabled={isSending}>{isSending ? status || "Sending..." : "Send Message"}</button>
                    <p className="form-status">{status}</p>
                </form>

                <div className="contact-info" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <h3>Reach Us</h3>
                    <p>
                        <FaEnvelope />{" "}
                        <a href="mailto:support@jaacyygadgets.com">support@jaacyygadgets.com</a>
                    </p>
                    <p>
                        <FaPhone /> <a href="tel:+2347040168887">+234 704 016 8887</a>
                    </p>
                    <p>
                        <FaMap />{" "}
                        <a
                            href="https://maps.app.goo.gl/CMQSJyKU58McU3PR9"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            No 9 Adepele Str, Merciful Plaza, shop D, Ikeja, Computer Village, Lagos, Nigeria
                        </a>
                    </p>
                    <div className="social-icons">
                        <a
                            href="https://www.facebook.com/JA CY"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.instagram.com/jaa_cyy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.tiktok.com/@jaacyygadgets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTiktok />
                        </a>
                        <a href="https://x.com/jaacyygadgets" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
