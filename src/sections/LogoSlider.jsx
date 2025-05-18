import { logoIconsList } from "../constants/index.js";

const LogoSlider = () => {
  return (
    <div className="my-10 md:my-20 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <div className="flex-none flex-center marquee-item" key={index}>
              <img src={icon.imgPath} alt="logo" />
            </div>
          ))}
          {logoIconsList.map((icon, index) => (
            <div className="flex-none flex-center marquee-item" key={index}>
              <img src={icon.imgPath} alt="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LogoSlider;
