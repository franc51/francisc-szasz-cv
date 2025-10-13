import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials_container" id="testimonials">
      <div className="testimonials_title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials_each">
        <div className="testimonials">
          <h1>Sebastian Onofrei</h1>
          <h2>Senior Full Stack Engineer @IBM</h2>
          <p>
            During the last 2 years, I have mentored Francisc in order to
            solidify his frontend expertise and to become familiar to backend
            concepts. I have put him through a lot of hard work and challenges,
            to be user focused and to have a mentality to give his best in
            whatever task he is assigned to work on. He is easy to work with,
            passionate about the craft of software development and very eager to
            give his help to a welcoming team. <br></br>
            <br></br>
            Whilst his main expertise is frontend development, where he got lots
            of hands-on experience, we have also explored crucial backend
            concepts and he is able to help on the backend side if needed. I
            have tried to diversify his tech stack and put him to learn about
            multiple technologies in order to be a versatile, T-shaped
            developer.
            <br></br> <br></br>I can proudly say he can be a great asset to any
            team which wants to grow with a junior / junior-mid role.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="testimonials_each">
        <div className="testimonials">
          <h1>Ovidiu-Rareș Botsch</h1>
          <h2>QA Engineer @Arnia Software</h2>
          <p>
            I had the pleasure of being colleague and working with Francisc
            during the master programme. He consistently demonstrated
            outstanding skills in frontend development, crafting responsive and
            intuitive user interfaces. His eye for web design also ensured that
            every project was not only functional but also aesthetically
            pleasing. Francisc is a true asset to any team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
