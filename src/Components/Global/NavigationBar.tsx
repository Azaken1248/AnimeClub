import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../Styles/NavigationBar.css";
import { useNavigate } from "react-router-dom";

interface NavigationBarProps {
  name: string;
  route: string;
}

const NavigationBar = ({ name, route }: NavigationBarProps) => {
  const navigate = useNavigate();

  const gotoPage = (page: string) => {
    navigate(`/AnimeClub/${page}`);
  };

  return (
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
      <button className="about-us-btn" onClick={() => gotoPage(`${route}`)}>
        {name}
      </button>
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
  );
};

export default NavigationBar;
