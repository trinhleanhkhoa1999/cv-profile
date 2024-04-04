import HomeCV from "@/components/contents/HomeCV";
import About from "@/components/contents/About";
import Skills from "@/components/contents/Skills";
import Projects from "@/components/contents/Projects";
import Contact from "@/components/contents/Contact";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}
const RightPart = (props: IProps) => {
  return (
    <div
      className={
        props.hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"
      }
    >
      <div className="rightpart_inner">
        <HomeCV />

        {/* <!-- ABOUT --> */}
        <About />
        {/* <!-- /ABOUT --> */}

        {/* <!-- SKILLS --> */}
        <Skills />
        {/* <!-- /SKILLS --> */}

        {/* <!-- Projects --> */}
        <Projects />
        {/* <!-- /Projects --> */}

        {/* <!-- CONTACT & FOOTER --> */}
        <Contact />
        {/* <!-- /CONTACT & FOOTER --> */}
      </div>
    </div>
  );
};

export default RightPart;
