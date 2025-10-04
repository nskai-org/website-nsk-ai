import Overlay from "../landing-page/navigation/navbar/Overlay";
import Footer from "../landing-page/footer/Footer";
import Projects from "./Projects";

const ProjectsPageLayout = () => {
  return (
    <>
      <Overlay />
      <div>
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default ProjectsPageLayout;
