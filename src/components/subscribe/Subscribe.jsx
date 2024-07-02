import "./Subscribe.scss";

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe to get news and updates</h2>
        <p data-aos="fade-up">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          similique amet magni fugit a in cumque totam odit aliquam, iste labore
          distinctio aliquid! Voluptatem iusto, tempore quod maxime
          reprehenderit perferendis ratione nobis adipisci aspernatur tenetur
          error aut, facilis culpa facere?
        </p>
        <form action="#" data-aos="fade-up">
          <input type="text" placeholder="Your Email Here" />
          <a href="#" className="btn">
            Subscribe
          </a>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
