import { Button, Modal } from "antd";
import { FaTwitter } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";
import { useState } from "react";
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>(null);

  console.log("check data ", dataDetail);

  interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    details: {
      description: string; // mieu ta du an lam gi
      technology: string; // miet ta cong nghe
      github: string; // link github
    };
  }
  const dataProject: IProject[] = [
    {
      image: <FaTwitter color={"#2bebfd"} size={50} />,
      title: "Twitter clone",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      details: {
        description: "Đây là web Twitter clone", // mieu ta du an lam gi
        technology:
          "ReactJs , Typescript, Redux-toolkit, Redux-thunk, React-router, Tailwindcss", // miet ta cong nghe
        github: "", // link github
      },
    },
    {
      image: <GiFruitBowl color={"#ffb26a"} size={50} />,
      title: "Fresh fruit",
      shortDescription:
        "Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...",
      details: {
        description: "Đây là web bán trái cây", // mieu ta du an lam gi
        technology: "", // miet ta cong nghe
        github: "", // link github
      },
    },
  ];
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={dataDetail && dataDetail.title ? dataDetail.title : ""}
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        footer={null}
        maskClosable={false}
      >
        {dataDetail && (
          <ul>
            <li>Miêu tả: {dataDetail.shortDescription} </li>
            <li>dad: {dataDetail.details.description}</li>
            <li>Công nghệ: {dataDetail.details.technology}</li>
            <li>
              Github:
              <a href={dataDetail.details.github}>
                {dataDetail.details.github}
              </a>
            </li>
          </ul>
        )}
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Projects</h3>
              <span>Learning...</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProject.map((item, index) => {
                  return (
                    <li key={index + 1}>
                      <div
                        className="inner"
                        onClick={() => {
                          setIsModalOpen(!isModalOpen);
                          setDataDetail(item);
                        }}
                      >
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                        <div
                          className="view_detail"
                          style={{ padding: "5px 0" }}
                        >
                          <span style={{ cursor: "pointer" }}>
                            <BsArrowRight />
                            &nbsp; Xem chi tiet
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
