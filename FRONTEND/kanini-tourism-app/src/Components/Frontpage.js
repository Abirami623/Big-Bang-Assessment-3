import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import LogoImage from './images/Logo.png';
import Image from './images/Image.jpg';
import './Frontpage.css';

const Frontpage = () => {
  const [user, setUser] = useState({});
  const [showText, setShowText] = useState(false);

  // Use useEffect to trigger the animation once the component is mounted
  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={LogoImage} alt="" width="75" height="75" className="d-inline-block align-text-top" size="2x" />
            MakeYourTrip
          </a>
          <button className="btn btn-outline-primary btn-sm ms-auto me-2">Logout</button> {/* Logout button */}
        </div>
      </nav>

      <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
        <img src={Image} alt="SimpleImage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          className={`animation-fade-in-right ${showText ? 'visible' : ''}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20%',
            transform: 'translateY(-50%)',
            textAlign: 'left',
            color: '#fff',
            // Add more styles here if needed
          }}
        >
          <div className="Text">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'black' }}>Tours Nature & Wildlife</h1>
            <p className="SubFont">
              Fly with who you want, stay wherever you want — now that's a dream holiday!
            </p>
            <div className="social-icons">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <br />
              <br />
            </div>
            <button className="btn btn-primary btn-lg">Let's Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
