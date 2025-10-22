"use client";

import { LandingNav } from "@/components/LandingNav"
import { LandingFooter } from "@/components/LandingFooter";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/style/AboutPage.scss";



const AboutPage = () =>{
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-out" });
    }, []);

    return(
        <>
            <LandingNav/>
            <main>
                <section className="about-section" id="about">
                            <h2 data-aos="fade-up">About Jaacyy&apos;s</h2>
                            <div className="about-content">
                                <div className="about-text" data-aos="fade-right">
                                    <p>
                                        At <span>Jaacyy’s Gadgets</span>, we believe technology should make life easier,
                                        smarter, and more exciting. We bring you the latest, high quality gadgets
                                        at unbeatable prices from everyday essentials to the newest tech innovations.
                                        Our mission is simple: deliver value, reliability, and an exceptional shopping
                                        experience to every customer, every time.
                                    </p>
                                    <p>
                                        <span>Jaacyy’s Gadgets</span> is more than a store it’s your plug for everything tech.
                                        Whether you’re upgrading your setup, shopping for smart accessories, or looking
                                        for the next cool device, we’ve got you covered. We blend quality, affordability,
                                        and style so you can enjoy the best of technology without breaking the bank.
                                    </p>
                                </div>
                
                                <div className="about-image" data-aos="fade-left">
                                    <Image
                                        src="/image/about-logo.png"
                                        width={500}
                                        height={500}
                                        alt="About Jaacyy"
                                        className="image"
                                    />
                                </div>
                            </div>
                            <div className="about-content only">
                                <div className="about-image" data-aos="fade-left">
                                    <Image
                                        src="/image/mic.jpeg"
                                        width={500}
                                        height={500}
                                        alt="About Jaacyy"
                                        className="image"
                                    />
                                </div>
                                <div className="about-text" data-aos="fade-right">
                                    <p>
                                        Behind <span>Jaacyy’s Gadgets</span> is a visionary mind our founder and CEO, 
                                        <span> Nwaoha Micheal</span>, whose passion for innovation and customer satisfaction 
                                        drives everything we do. A graduate of Federal University of Technology, Owerri with a Bsc in Petroleum Engineering and a strong background in technology and a deep understanding 
                                        of what today’s consumers need, he built Jaacyy’s Gadgets to bridge the gap between 
                                        quality and affordability. His leadership continues to inspire a culture of creativity, 
                                        integrity, and excellence across the company.
                                    </p>
                                    <p>
                                        Our vision is to become Africa’s most trusted destination for smart, reliable, 
                                        and trendsetting technology. We are committed to making the digital lifestyle 
                                        accessible to everyone from students and professionals to business owners 
                                        and tech enthusiasts.
                                    </p>
                                </div>
                
                                
                            </div>

                            <div className="about-content">
                                <div className="about-text" data-aos="fade-right">
                                    <p>
                                        At <span>Jaacyy’s Gadgets</span>, we don’t just sell gadgets we empower people 
                                        to do more, connect better, and live smarter. We see technology as a bridge 
                                        to opportunity, productivity, and creativity. That’s why we continuously 
                                        explore emerging innovations, partner with trusted brands, and keep our 
                                        customers at the heart of every decision we make.
                                    </p>
                                    <p>
                                        As we grow, our promise remains the same: to deliver premium gadgets, 
                                        honest service, and a shopping experience that feels personal, reliable, 
                                        and rewarding. Because for us, it’s not just about selling devices.
                                        it’s about building lasting relationships and a tech driven community 
                                        that inspires the future. Every product we offer is carefully selected to ensure 
                                        performance, durability, and great value for money.
                                    </p>
                                </div>
                
                                <div className="about-image" data-aos="fade-left">
                                    <Image
                                        src="/image/bannerjac.jpg"
                                        width={500}
                                        height={500}
                                        alt="About Jaacyy"
                                        className="image"
                                    />
                                </div>
                            </div>
                            
                        </section>
            </main>
            <LandingFooter />
        </>
    )
}

export default AboutPage