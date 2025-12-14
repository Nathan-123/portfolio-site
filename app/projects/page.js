"use client";
import Image from "next/image";

export default function FeaturedProjectsPage() {
    const projects = [
        {
            title: "Syntra - DubHacks 2025",
            abstract: "An AI-powered electron study tool that allows students to share files with groups efficiently while creating flashcards and practice materials for exam prep. Demo currently doesn't work due to the deactivation of DubHacks temporary AWS credits used to create Syntra.",
            Image: "/syntra.png",
            demo: "https://github.com/Ameya-Bhide/DubHacks-25-2.0#", 
            moreinfo: "https://devpost.com/software/study-group-inc"
        }, 
        {
            title: "KittenKitchen - Protothon 2025",
            abstract: "Figma prototype for an app that combats food insecurity through encouraging user to share surplus ingredients and recipes.",
            Image: "/kittenkitchen.png",
            demo: "https://www.figma.com/proto/sATDbuBOyvOyDJcXeutULf/kittenkitchen?node-id=23-430&starting-point-node-id=6%3A42", 
            moreinfo: "https://www.canva.com/design/DAGnG0HLJN4/XDHyk_CiLjohCBYLhG2rag/edit"}
        ]; 

    return (
        <div className="projects-page">
            <h1>FEATURED PROJECTS</h1>
            <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className="project-card">

                <div className="project-image-wrapper">
                    <div className="image-overlay-container">
                        <Image 
                        src={project.Image} 
                        alt={project.title}
                        width={400} 
                        height={250} 
                        className="project-image"
                        />

                        <div className="project-links">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                Live Demo
                            </a>
                            <a href={project.moreinfo} target="_blank" rel="noopener noreferrer" className="project-link">
                                More Info
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-abstract">{project.abstract}</p>

                </div>
            ))}
            </div>
        </div>
    );
}