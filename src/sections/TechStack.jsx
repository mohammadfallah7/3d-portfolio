import { TitleHeader } from "../components";
import { techStackIcons } from "../constants";
import { TechIcon } from "../components/TechModels";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      },
    );
  }, []);

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full px-5 md:px-10">
        <TitleHeader
          title="My Prefered Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />
        <ul className="tech-grid">
          {techStackIcons.map((techIcon, index) => (
            <li
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={techIcon} />
                </div>
                <div className="padding-x w-full">
                  <p>{techIcon.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
