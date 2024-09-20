import "../../Styles/ContentDescription.css";
import Moon from "../../assets/Misc/moon.png";
import Sakura from "../../assets/Misc/sakura.png";

const ContentDescription = () => {
  return (
    <section className="content-description">
      <div className="moon">
        <img src={Moon} height="350px" width="350px" alt="Moon" />
      </div>
      <div className="sakura">
        <div className="tree">
          <img
            src={Sakura}
            height="800px"
            width="800px"
            className="sakura-glow"
            alt="Sakura Glow"
          />
          <img src={Sakura} height="800px" width="800px" alt="Sakura" />
        </div>
        <div className="info">The Heading</div>
      </div>
    </section>
  );
};

export default ContentDescription;
