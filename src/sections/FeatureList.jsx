import { abilities } from "../constants/index.js";

const FeatureList = () => {
  return (
    <div className="w-full padding-x-lg">
      <ul className="mx-auto grid-3-cols">
        {abilities.map((feature, index) => (
          <li
            key={index}
            className={"card-border rounded-xl p-8 flex flex-col gap-4"}
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={feature.imgPath} alt={feature.title} />
            </div>
            <h3 className="text-white text-2xl font-semibold">
              {feature.title}
            </h3>
            <p className="text-white-50 text-lg">{feature.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FeatureList;
