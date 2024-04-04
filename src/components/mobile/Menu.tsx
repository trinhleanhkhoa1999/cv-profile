import logoMobile from "@/assets/img/logo/mobile_logo.png";
import { useState } from "react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const style = {
    overflow: "hidden",
    display: isOpen ? "block" : "none",
    transition: "2s",
  };

  const handleClickTab = (
    tab: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setActiveTab(tab);
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="arlo_tm_mobile_header_wrap">
      <div className="main_wrap">
        <div className="logo">
          <a href="index.html">
            <img src={logoMobile} alt="mobile_logo" />
          </a>
        </div>
        <div className="arlo_tm_trigger">
          <div
            className={
              isOpen
                ? "hamburger hamburger--collapse-r is-active"
                : "hamburger hamburger--collapse-r"
            }
          >
            <div className="hamburger-box">
              <div
                className="hamburger-inner"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="arlo_tm_mobile_menu_wrap" style={style}>
        <div className="mob_menu">
          <ul className="anchor_nav">
            <li>
              <a
                href="#home"
                className={activeTab === "home" ? "active" : ""}
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  handleClickTab("home", e);
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeTab === "about" ? "active" : ""}
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  handleClickTab("about", e);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeTab === "skills" ? "active" : ""}
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  handleClickTab("skills", e);
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeTab === "projects" ? "active" : ""}
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  handleClickTab("projects", e);
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeTab === "contact" ? "active" : ""}
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  handleClickTab("contact", e);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
