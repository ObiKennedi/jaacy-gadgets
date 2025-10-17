"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/style/AboutSection.scss";

export const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true, easing: "ease-out" });
    }, []);

    return (
        <section className="about-section" id="about">
            <h2 data-aos="fade-up">About Jaacyy&apos;s</h2>
            <div className="about-content">
                <div className="about-text" data-aos="fade-right">
                    <p>
                        At <span>Jaacyy’s Gadgets</span>, we believe technology should make life easier,
                        smarter, and more exciting. We bring you the latest, high-quality gadgets
                        at unbeatable prices — from everyday essentials to the newest tech innovations.
                        Our mission is simple: deliver value, reliability, and an exceptional shopping
                        experience to every customer, every time.
                    </p>
                    <p>
                        <span>Jaacyy’s Gadgets</span> is more than a store — it’s your plug for everything tech.
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
        </section>
    );
};
