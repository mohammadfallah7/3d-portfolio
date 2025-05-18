import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 10;
      setScroll(isScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scroll ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Mohammad | Fallah
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index} className="group">
                <a href={navLink.link}>
                  <span>{navLink.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="contact-btn group" href="#contact">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};
export default Navbar;
