import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg mt-32 xl:mt-0">
      <ul className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <li
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AnimatedCounter;
