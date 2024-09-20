import NavigationBar from "../Components/Global/NavigationBar";
import Panel from "../Components/AboutUs/Panel";

import Moon2 from "../assets/Misc/moon2.png";
import SakuraGrass from "../assets/Misc/sakuraGrass.png";
import Water from "../assets/Misc/water.png";

import "../Styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="content-description">
      <div className="custom-nav">
        <label className="logo">ANIME REALM</label>
        <NavigationBar name={"Home"} route={""} />
      </div>
      <div className="moon-two">
        <img src={Moon2} height="350px" width="350px" alt="Moon" />
      </div>
      <Panel name={"The About"} />
      <div className="sakuragrass">
        <div className="tree">
          <img
            src={SakuraGrass}
            height="800px"
            width="800px"
            className="sakuragrass-glow"
            alt="Sakura Glow"
          />
          <img src={SakuraGrass} height="800px" width="800px" alt="Sakura" />
        </div>
      </div>
      <div className="water">
        <img src={Water} height={"422px"} width={"1686.5px"} alt="Water" />
      </div>
    </section>
  );
};
export default AboutUs;
