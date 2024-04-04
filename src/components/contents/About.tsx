import myLogo from "@/assets/img/hero/khoa.jpg";
import myCV from "@/assets/cv/cv.pdf";
import img550 from "@/assets/img/about/550x640.jpg";

import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";
import Parallax from "parallax-js";

const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });

      parallaxInstance.enable();

      return () => parallaxInstance.disable();
    }
  }, []);
  return (
    <div className="arlo_tm_section relative" id="about">
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                  ref={sceneEl}
                >
                  <div className="image layer" data-depth="0.1">
                    <img src={img550} alt="550x640" />
                    <div
                      className="inner"
                      data-img-url={myLogo}
                      style={{ backgroundImage: `url(${myLogo})` }}
                    ></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src={img550} alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>
                    Hi there&nbsp;
                    <TypeAnimation
                      sequence={["I'm a Web Developer Frontend React", 2000]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined} // style={{ fontSize: "2em", display: "inline-block" }}
                    />
                    <span className="arlo_tm_animation_text_word"></span>
                  </h4>
                </div>
                <div className="definition">
                  <p>
                    Xin chào tôi là <strong>Trịnh Lê Anh Khoa</strong>
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Birthday:</label> 16.01.1999
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>City:</label> TP.Hồ Chí Minh
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Study:</label> TRƯỜNG ĐẠI HỌC NGOẠI NGỮ - TIN HỌC
                        TP. HỒ CHÍ MINH (HUFLIT).
                      </span>
                    </li>

                    <li>
                      <span>
                        <label>Mail:</label>{" "}
                        <a href="trinhleanhkhoa1999@gmail.com">
                          trinhleanhkhoa1999&#64;gmail.com
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Phone:</label> <a href="#">0932704521</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Facebook</label> <a href="#">&#64;myusername</a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={myCV} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
