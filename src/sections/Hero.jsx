import { words } from "../constants";
import { Button } from "../components";
import { HeroExperience } from "../components/HeroModels";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      },
    );
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>

      <div className="hero-layout">
        {/*  Left: Content  */}
        <header className="flex flex-col justify-center w-screen md:w-full px-5 md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        className="flex items-center md:gap-3 gap-1 pb-2"
                        key={index}
                      >
                        <img
                          className="bg-white-50 rounded-full p-1 md:p-2 size-7 md:size-10 xl:size-12"
                          src={word.imgPath}
                          alt={word.text}
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 relative z-10 md:text-xl">
              Hi, I'm Mohammad, a developer based in Coratia with a passion for
              code.
            </p>
            <Button id="button" className="md:w-80 md:h-16 w-60 h-12">
              See my Work
            </Button>
          </div>
        </header>

        {/*  Right: 3D Model  */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};
export default Hero;
