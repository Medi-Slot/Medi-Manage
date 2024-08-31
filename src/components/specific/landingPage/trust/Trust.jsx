import React, { useRef } from "react";
import "./style.css";
import Review from "../review/Review";
import Person from "../../../../assets/images/person-1.jpg";
import Person2 from "../../../../assets/images/person-2.jpg";
import Person3 from "../../../../assets/images/person-3.jpg";
import Person4 from "../../../../assets/images/person-4.jpg";
import Person5 from "../../../../assets/images/person-5.jpg";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Trust() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="landing-page-trust">
      <h1>Trusted by Thousands of Hospitals</h1>
      <p className="landing-page-trust-p">
        These are the stories of our Hospitals who have joined us in this
        journey.
      </p>
      <div className="landing-page-trust-review" ref={scrollRef}>
        <Review
          Image={Person}
          Name="Harsha Hospital"
          Location="Andhra Pradesh, India"
          Rating="4.5"
          Review='"Medi-Manage has been a game-changer for our hospital. The streamlined queuing process in our OPDs has drastically reduced patient wait times, and the integration with our existing systems was seamless."'
        />
        <Review
          Image={Person2}
          Name="Sunshine Medical Center"
          Location="Telangana, India"
          Rating="4.7"
          Review='"The bed management system has helped us optimize patient admissions and discharges efficiently. The interface is user-friendly, and the support team is always ready to help."'
        />
        <Review
          Image={Person3}
          Name="Rainbow Children's Hospital"
          Location="Karnataka, India"
          Rating="4.8"
          Review='"We have seen significant improvements in our inventory management with Medi-Manage. It has reduced errors and streamlined the entire process."'
        />
        <Review
          Image={Person4}
          Name="Apollo Hospitals"
          Location="Tamil Nadu, India"
          Rating="4.9"
          Review='"Medi-Manage seamlessly integrated with our existing systems, and we have had no issues since implementation. It has really made a difference in patient care."'
        />
        <Review
          Image={Person5}
          Name="Fortis Hospital"
          Location="Delhi, India"
          Rating="4.6"
          Review='"The queuing and scheduling modules are exceptional. Patient satisfaction has increased, and our operations are more efficient now."'
        />
      </div>
      <div className="landing-page-trust-scroll-buttons">
        <button className="landing-page-trust-scroll-left" onClick={scrollLeft}>
          <IoIosArrowDropleft className="landing-page-trust-left-arrow" />
        </button>
        <button
          className="landing-page-trust-scroll-right"
          onClick={scrollRight}
        >
          <IoIosArrowDropright className="landing-page-trust-left-arrow" />
        </button>
      </div>
    </div>
  );
}
