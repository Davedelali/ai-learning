// Import necessary libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';

// Hero Section Component
const HeroSection = () => (
    <header className="hero-section">
        <h1 className="hero-title animated-text">Learn a Language with Ease</h1>
        <p className="hero-subtitle animated-text">
            Personalized courses, tailored exercises, and AI-powered learning.
        </p>
        <button className="cta-button animated-text">Start Learning</button>
    </header>
);

// Course Section Component
const CourseSection = () => (
    <section className="course-section">
        <h2 className="section-title animated-text">Choose Your Language</h2>
        <div className="course-cards">
            {['English', 'Spanish', 'French', 'German'].map((lang) => (
                <div className="course-card animated-text" key={lang}>
                    <h3>{lang}</h3>
                    <p>Start your journey with interactive lessons.</p>
                </div>
            ))}
        </div>
    </section>
);

// Progress Section Component
const ProgressSection = () => (
    <section className="progress-section">
        <h2 className="section-title animated-text">Track Your Progress</h2>
        <div className="progress-bar">
            <div className="progress-fill animated-fill" style={{ width: '75%' }}>
                75% Complete
            </div>
        </div>
        <p className="animated-text">Consistency is key! Keep up your daily streak.</p>
    </section>
);

// Feature Cards Component
const FeatureCards = () => (
    <section className="feature-section">
        <h2 className="section-title animated-text">Why Choose SpeakEase?</h2>
        <div className="feature-cards">
            <div className="feature-card animated-text">
                <h3>AI-Powered Learning</h3>
                <p>Interactive lessons tailored to your skill level.</p>
            </div>
            <div className="feature-card animated-text">
                <h3>Accent Feedback</h3>
                <p>Improve pronunciation with real-time AI analysis.</p>
            </div>
            <div className="feature-card animated-text">
                <h3>Grammar Practice</h3>
                <p>Engage in exercises designed to boost your grammar.</p>
            </div>
        </div>
    </section>
);

// Testimonials Component
const Testimonials = () => (
    <section className="testimonials">
        <h2 className="section-title animated-text">What Our Users Say</h2>
        <div className="testimonial animated-text">
            <p>"This app changed the way I learn languages. So engaging!"</p>
            <span>- Alex</span>
        </div>
        <div className="testimonial animated-text">
            <p>"I love the tailored lessons and progress tracking. Highly recommended!"</p>
            <span>- Maria</span>
        </div>
    </section>
);

// Footer Component
const Footer = () => (
    <footer className="footer">
        <p>&copy; 2024 SpeakEase. Learn languages effortlessly.</p>
        <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact Us</li>
        </ul>
    </footer>
);

// Main App Component
const App = () => {
    return (
        <div className="app-container">
            <HeroSection />
            <CourseSection />
            <FeatureCards />
            <ProgressSection />
            <Testimonials />
            <Footer />
        </div>
    );
};

// Render Application
const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;





