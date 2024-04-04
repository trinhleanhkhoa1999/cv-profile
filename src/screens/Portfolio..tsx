import { FloatButton } from "antd";
import LeftPart from "../components/LeftPart";
import Menu from "../components/mobile/Menu";
import PreLoader from "../components/PreLoader";
import RightPart from "../components/RightPart";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const Portfolio = () => {
  const [hideLeftPart, setHideLeftPart] = useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      setHideLeftPart(true);
    }
  }, [isMobile]);
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      {/* <!-- PRELOADER --> */}

      <PreLoader />

      {/* <!-- /PRELOADER --> */}

      {/* <!-- MOBILE MENU --> */}
      <Menu />
      {/* <!-- /MOBILE MENU --> */}

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart
          hideLeftPart={hideLeftPart}
          setHideLeftPart={setHideLeftPart}
        />
        {/* <!-- /LEFTPART --> */}
        {/* <!-- RIGHTPART --> */}
        <RightPart
          hideLeftPart={hideLeftPart}
          setHideLeftPart={setHideLeftPart}
        />
        {/* <!-- /RIGHTPART --> */}
        {/* <a className="arlo_tm_totop" href="#"></a> */}

        <FloatButton.BackTop tooltip={<div>Scroll to Top</div>} />
      </div>
    </div>
  );
};
export default Portfolio;
