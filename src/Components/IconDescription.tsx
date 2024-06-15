import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/IconDescription.css";

import NavigationBar from "./NavigationBar";

const IconDescription = () => {
  return (
    <section className="icon-description">
      <div className="content-box">
        <NavigationBar />
        <h1 className="title" data-text="ANIME REALM">
          ANIME REALM
        </h1>
        <div className="scrollbar">
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="fa-angle-double-down"
          />
          <FontAwesomeIcon
            icon={faAngleDoubleDown}
            className="fa-angle-double-down"
          />
        </div>
      </div>
    </section>
  );
};

export default IconDescription;
