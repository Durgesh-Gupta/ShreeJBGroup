import logo from "./logo.svg";
import "./App.css";
import Intro from "./component/Intro";
import Service from "./component/Service";
import Section2 from "./component/Section2";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import About from "./component/About";

function App() {
  return (
    <div>
      <Intro />
      <Service />
      <Section2 />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}

export default App;
