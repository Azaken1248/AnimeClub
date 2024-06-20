import "../Styles/Footer.css";
import NekoPaw from "../assets/Misc/nekopaw.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="neko">
        <img src={NekoPaw} />
      </div>
      <div className="footer-content">The Footer</div>
    </section>
  );
};

export default Footer;
