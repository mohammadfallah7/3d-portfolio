import {
  Experiences,
  FeatureList,
  Hero,
  LogoSlider,
  Navbar,
  Showcase,
  TechStack,
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
      <TechStack />
    </>
  );
};

export default App;
