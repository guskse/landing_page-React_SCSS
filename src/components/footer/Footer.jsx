import "./Footer.scss";

import { useEffect } from "react";

//socials icons
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import Logo from "../../assets/Logo.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
          <img src={Logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            officia possimus laboriosam sunt tenetur cum.
          </p>
        </div>

        <div className="footer__col">
          <h3>About</h3>
          <a href="#">About us</a>
          <a href="#">Features</a>
          <a href="#">News</a>
        </div>

        <div className="footer__col">
          <h3>Company</h3>
          <a href="#">Rankings</a>
          <a href="#">CryptoCode</a>
          <a href="#">Security</a>
        </div>

        <div className="footer__col">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Support</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="footer__col">
          <h3>Socials</h3>
          <div className="footer__icons">
            <a href="#" className="footer__icon">
              <FaFacebook />
            </a>
            <a href="#" className="footer__icon">
              <FaInstagram />
            </a>
            <a href="#" className="footer__icon">
              <FaYoutube />
            </a>
            <a href="#" className="footer__icon">
              <FaLinkedin />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
