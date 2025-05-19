import {
  Experiences,
  FeatureList,
  Hero,
  LogoSlider,
  Navbar,
  Showcase,
} from "./sections";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <LogoSlider />
      <FeatureList />
      <Experiences />
    </>
  );
};

export default App;
