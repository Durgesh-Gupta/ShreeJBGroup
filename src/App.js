import logo from "./logo.svg";
import "./App.css";
import Intro from "./component/Intro";
import Service from "./component/Service";
import Section2 from "./component/Section2";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div>
        <Intro />
        <Service />
        <Section2 />
        {/* <Gallery /> */}
        <About />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
