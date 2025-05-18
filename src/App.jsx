import { FeatureList, Hero, Showcase } from "./sections";
import { LogoSlider, Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSlider />
      <FeatureList />
    </>
  );
};

export default App;
