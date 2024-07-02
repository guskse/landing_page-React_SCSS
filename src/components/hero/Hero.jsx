import "./Hero.scss";

import { useEffect } from "react";

//aos (animate on scroll library)
import Aos from "aos";
import "aos/dist/aos.css";

import Mob from "../../assets/Mob.png";

const Hero = () => {
  //initialize AOS on render of page (AOS = animate on scroll lib)
  useEffect(() => {
    //duration 1s for the animation
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-right">
          <img src={Mob} alt="hero" />
        </div>

        <div className="hero__right" data-aos="zoom-in">
          <h1>Make easier your crypto transaction</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloribus ipsa nemo ducimus ab, aut vel, quas deleniti adipisci
            recusandae fugit consequatur perspiciatis tempora magni, laboriosam
            obcaecati nulla. Sunt, eveniet?
          </p>
          <a href="#" className="btn">
            TRY FOR FREE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
