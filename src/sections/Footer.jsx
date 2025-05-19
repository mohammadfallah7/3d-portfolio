import { socialImgs } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Download Resume</a>
        </div>

        <ul className="socials">
          {socialImgs.map((social, i) => (
            <li key={i}>
              <a className="icon" href={social.url} target="_blank">
                <img src={social.imgPath} alt={social.name} />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Mohammad Fallah. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
