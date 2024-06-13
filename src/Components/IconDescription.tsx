import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../styles/IconDescription.css";

const IconDescription = () => {
  return (
    <section className="icon-description">
      <div className="content-box">
        <div className="nav">
          <div className="menu">
            Menu
            <div className="hamburger">
              <div className="line"></div>
              <div className="line-break">
                <div className="line-half"></div>
                <div className="line-half-color"></div>
              </div>
            </div>
          </div>
          <div className="profile">
            <AccountCircleIcon
              style={{
                color: "#ffffff",
                background: "#000000",
                borderRadius: "100%",
                width: "60px",
                height: "60px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
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
