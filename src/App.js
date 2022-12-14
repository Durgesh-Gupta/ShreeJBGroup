import logo from "./logo.svg";
import "./App.css";
import Intro from "./component/Intro";
import Service from "./component/Service";
import Section2 from "./component/Section2";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import About from "./component/About";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Intro />
      <Service />
      <Section2 />
      {/* <Gallery /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
