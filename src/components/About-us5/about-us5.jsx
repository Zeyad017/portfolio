/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/4.jpg" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font">Generalist Designer</h3>
              <h5 className="co-tit mb-15">
                I help to create visual strategies.
              </h5>
              <p>
                These are the tools I use to achieve successful visual communication.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Cinema 4D</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="70%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Adobe Illustrator</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="80%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Adobe Photoshop</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="80%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Adobe Premier Pro</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="65%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Apps Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="80%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Z Brush</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="60%"></div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
