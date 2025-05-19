import {
  Experiences,
  FeatureList,
  Hero,
  LogoSlider,
  Navbar,
  Showcase,
  TechStack,
  Testimonials,
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
      <Testimonials />
    </>
  );
};

export default App;
