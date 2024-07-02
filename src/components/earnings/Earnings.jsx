import "./Earnings.scss";

import { useEffect } from "react";

import Img from "../../assets/earnings.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Earnings = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left">
          <img src={Img} alt="earnings chart" data-aos="fade-right" />
        </div>

        <div className="earnings__right" data-aos="zoom-in-up">
          <h2>Tracking your earnings and cryptocode is easy</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            consectetur, aperiam consequatur ducimus dolorem distinctio.
          </p>
          <a href="#" className="btn">
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
};

export default Earnings;
