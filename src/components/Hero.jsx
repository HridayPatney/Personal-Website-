import SocialLinks from "./SocialLinks";
import heroImg from "../assets/hero.JPG";

export default function Hero(){
    return (
        <section className='hero'>
            <div className='hero-text'>
                <span className="location">📍 New Delhi, India</span>
                <h1>Hey -</h1>
                <p className="intro">
                I’m <strong>Your Name</strong>. I build software, tools, and digital
                products.
                </p>

                <p className="subtext">
                Interested in systems, AI, and thoughtful engineering.
                </p>

                <SocialLinks/>
            </div>
            <img src={heroImg} alt="Profile" className="hero-image"/>
        </section>
    )
}