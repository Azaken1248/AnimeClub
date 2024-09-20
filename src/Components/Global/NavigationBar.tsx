import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../Styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavigationBar;
