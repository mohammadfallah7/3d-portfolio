import {
  Contact,
  Experiences,
  FeatureList,
  Footer,
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
      <Contact />
      <Footer />
    </>
  );
};

export default App;
