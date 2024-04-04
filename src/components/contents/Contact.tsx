import React from "react";

const Contact = () => {
  return (
    <div className="arlo_tm_section" id="contact">
      <div className="container">
        <div className="arlo_tm_title_holder contact">
          <h3>Contact Me</h3>
          <span>Get in touch with me</span>
        </div>
      </div>
      <div className="arlo_tm_footer_contact_wrapper_all">
        <div className="arlo_tm_contact_wrap_all">
          <div className="container">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder contact">
                <h4>Get in Touch</h4>
              </div>
              <div className="short_info_wrap">
                <ul>
                  <li>
                    <p>
                      <label>Address:</label>
                      <span>TP.HCM</span>
                    </p>
                  </li>

                  <li>
                    <p>
                      <label>Phone:</label>
                      <span>0932704521</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <label>Email:</label>
                      <span>
                        <a href="mailto:trinhleanhkhoa1999@gmail.com">
                          trinhleanhkhoa1999@gmail.com
                        </a>
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="arlo_tm_footer_wrap">
          <div className="container">
            <p>@Trịnh Lê Anh Khoa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
