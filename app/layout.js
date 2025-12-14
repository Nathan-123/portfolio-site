import './globals.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export const metadata = {
    title: 'Nathan Adams Portfolio',
    description: 'Welcome to my personal portfolio website showcasing my projects and skills.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="app-container">
                    <Navbar />

                    <main className="main-content">
                        {children}
                    </main>

                    <Footer />
                </div>
            </body>
        </html>
    )
}
