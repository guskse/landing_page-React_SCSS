import "./Status.scss";

import { useEffect } from "react";

import StatusImg from "../../assets/status.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Status = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="status">
      <div className="status__container wrapper">
        <div className="status__left" data-aos="zoom-in-up">
          <h2>Trust us due to our safe and convenient deposit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            optio commodi, eius amet alias rem placeat modi expedita numquam
            nisi harum dolor minima aut dolore officia iure libero, quae rerum
            fugit adipisci delectus fuga iste.
          </p>
          <a href="#" className="btn">
            KNOW MORE
          </a>
        </div>

        <div className="status__right" data-aos="fade-left">
          <img src={StatusImg} alt="status" />
        </div>
      </div>
    </section>
  );
};

export default Status;
