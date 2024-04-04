import ProgressBar from "@ramonak/react-progress-bar";

const Skill = () => {
  return (
    <div className="arlo_tm_section" id="skills">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Kỹ năng Frontend</h4>
              </div>
              <span>Cắt/ghép template Website Responsive</span>
              <br />
              <span>
                Framework/Library: React.JS, Redux-toolkit, Redux-thunk,
                Restful-api
              </span>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">HTML/CSS/Javascript</span>
                    </span>
                    {/* <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <div className="arlo_tm_bar"></div>
                      </div>
                    </div> */}
                    <ProgressBar
                      completed={100}
                      bgColor={"#041230"}
                      height={"8px"}
                      isLabelVisible={false}
                    />
                  </div>
                </div>
                <br />
                <div
                  className="arlo_tm_progress"
                  data-value="95"
                  data-color="#000"
                >
                  <span>
                    <span className="label">React.JS(TypeScript)</span>
                  </span>
                  {/* <div className="arlo_tm_bar_bg">
                      <div className="arlo_tm_bar_wrap">
                        <div className="arlo_tm_bar"></div>
                      </div>
                    </div> */}
                  <ProgressBar
                    completed={100}
                    bgColor={"#041230"}
                    height={"8px"}
                    isLabelVisible={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
