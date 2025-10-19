import Image from "next/image"
import Link from "next/link"
import "@/style/LandingFooter.scss"
import { } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";

export const LandingFooter = () => {
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
                <form className="subscribe">
                    <h2>Stay in touch</h2>
                    <div>
                        <input type="text" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                </form>
            </div>
            <hr />
            <div className="rights">
                <p>&copy; {new Date().getFullYear()} Jaacyy&apos;s Gadgets. All rights reserved</p>
                <p>Built by <a href="/dexter-lahb.com">Dexter&apos;s Lahb</a></p>
            </div>
        </footer>
    )
}