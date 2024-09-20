import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/IconDescription.css";

import NavigationBar from "../Global/NavigationBar";

const handleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

const IconDescription = () => {
  return (
    <section className="icon-description">
      <div className="content-box">
        <NavigationBar />
        <h1 className="title" data-text="ANIME REALM">
          ANIME REALM
        </h1>
        <div className="scrollbar" onClick={handleScroll}>
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="fa-angle-double-down first-arrow"
          />
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="fa-angle-double-down second-arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default IconDescription;
