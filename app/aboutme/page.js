"use client";
import Image from "next/image";

export default function AboutMePage() {
    return (
        <div className="aboutme-page">
            <div className="aboutme-section">
                <div className="aboutme-image-wrapper">
                    <Image 
                        src="/me1.jpg" 
                        alt="Nathan Adams"
                        width={500} 
                        height={500}
                        className="aboutme-image"
                    />
                </div>
                <div className="aboutme-text">
                    <h1>ABOUT ME</h1>
                    <p>
                        Hello! I am a sophomore at the University of Washington and I'm pursuing a degree in Informatics. I am very passionate about web development and UX design, particularly in ensuring that displayed information is accessible and that all functions run quickly and efficiently. I am currently learning key web development programming languages and expanding my prototyping skills.
                    </p>
                </div>
            </div>
            <div className="fun-facts-section">
                <div className="fun-fact-text">
                    <h2>Fun Facts</h2>
                    <ul>
                        <li>I'm a huge Seattle Seahawks fan (Go Hawks!)</li>
                        <li>I play intermural frisbee!</li>
                        <li>Avid gamer during my free time!</li>
                    </ul>
                </div>
                <div className="fun-fact-image-wrapper">
                    <Image 
                        src="/frisbee.png" 
                        alt="Frisbee"
                        width={300}
                        height={200}
                        className="fun-fact-image"
                    />
                </div>
            </div>
        </div>
    );
}
