import { TypeAnimation } from "react-type-animation";
import myLogo from "@/assets/img/hero/khoa.jpg";

const HomeCV = () => {
  const handleScrollToAbout = () => {
    const section = document.querySelector("#about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="arlo_tm_section" id="home">
      <div className="arlo_tm_hero_header_wrap">
        <div className="arlo_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
            <div className="overlay_color hero"></div>
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src={myLogo} alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  Khoa Trịnh. <span>Trịnh Lê Anh Khoa</span>
                </h3>
              </div>
              <div className="text_typing">
                <p>
                  I'm a&nbsp;
                  <TypeAnimation
                    sequence={[
                      "Freelancer", // Types 'One'
                      2000, // Waits 1s
                      "UI/UX Designer", // Deletes 'One' and types 'Two'
                      2000, // Waits 2s
                      "Web Developer",
                      2000, // Types 'Three' without deleting 'Two'
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined} // style={{ fontSize: "2em", display: "inline-block" }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToAbout();
              }}
            >
              <i className="xcon-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCV;
