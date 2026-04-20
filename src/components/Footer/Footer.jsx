
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import './Footer.css'
function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // ✅ from .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // ✅ from .env
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY, // ✅ from .env
        }
      );
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contactez-Moi</h2>
          <p className="contact-subtitle">
            Une question ou un projet ? N'hésitez pas à m'envoyer un message !
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Votre Nom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-textarea"
                  placeholder="Votre message ici..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Envoyer le Message
                <i className="fas fa-paper-plane ms-2"></i>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3 className="info-title">Infos de Contact</h3>
              <div className="info-links">
                <a href="https://www.linkedin.com/in/hajar-sandid-13656b386" target="_blank" rel="noopener noreferrer" className="info-link">
                  <div className="icon-box">
                    <SlSocialLinkedin />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/SandidHajar" target="_blank" rel="noopener noreferrer" className="info-link">
                  <div className="icon-box">
                    <SlSocialGithub />
                  </div>
                  <span>GitHub</span>
                </a>
                <a href="mailto:sandidajar@gmail.com" className="info-link">
                  <div className="icon-box">
                    <TfiEmail />
                  </div>
                  <span>sandidajar@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hajar Sandid. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
