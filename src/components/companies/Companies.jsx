import "./Companies.scss";

import { useEffect } from "react";

//company data
import { companyInfo } from "../../Data";

//aos (animate on scroll lib)
import Aos from "aos";
import "aos/dist/aos.css";

const Companies = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="companies">
      <div className="companies__container wrapper" data-aos="fade-up">
        {companyInfo.map(({ id, img }) => (
          <img key={id} src={img} alt="company" />
        ))}
      </div>
    </section>
  );
};

export default Companies;
