"use client";

import Link from 'next/link';

export default function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/aboutme">About Me</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contacts">Contact</Link></li>
            </ul>
        </nav>
    )
}