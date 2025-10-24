import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSignOutAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { showSuccess } from '../utils/toast';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isGuest');
    showSuccess('Logged out successfully');
    navigate('/login');
  };

  const teamMembers = [
    { name: 'Sneha', role: 'Frontend Developer', img: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Jebin', role: 'Backend Developer', img: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Aravind', role: 'UI/UX Designer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Prasanth', role: 'Project Manager', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#hero">
            <img 
              src="/logo.png" 
              alt="Zyndify Logo" 
              className="navbar-logo"
            />
            <span>Zyndify</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item">
                <button 
                  className="nav-link logout-btn" 
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="me-2" />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-overlay" data-aos="fade-up">
          <h1>Welcome to Zyndify</h1>
          <p>We craft modern web applications with elegant design and seamless user experience.</p>
          <a href="#contact" className="btn btn-primary mt-4">Get in Touch</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about section" id="about" data-aos="fade-up">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Zyndify is a team of passionate developers and designers delivering high-quality web solutions. 
            We specialize in React, TypeScript, and modern web technologies to create scalable and beautiful applications.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section" id="team">
        <div className="container">
          <h2 className="mb-5 text-center" data-aos="fade-up">Meet Our Team</h2>
         <div className="row">
  {teamMembers.map((member, idx) => (
    <div className="col-md-3 mb-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
      <div className="team-card">
        <img src={member.img} alt={member.name} />
        <h5 className="mt-3">{member.name}</h5>
        <p>{member.role}</p>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-5">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
              <form>
                <input type="text" className="form-control" placeholder="Name" required />
                <input type="email" className="form-control" placeholder="Email" required />
                <textarea className="form-control" placeholder="Message" rows={5} required></textarea>
                <button type="submit" className="btn btn-primary mt-3">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-aos="fade-up">
        <p>&copy; 2025 Zyndify. All rights reserved.</p>
        <div className="social-links mt-3">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
