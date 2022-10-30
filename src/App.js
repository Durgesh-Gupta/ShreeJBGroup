import logo from "./logo.svg";
import "./App.css";
import Intro from "./component/Intro";
import Service from "./component/Service";
import Section2 from "./component/Section2";
import Gallery from "./component/Gallery";

function App() {
  return (
    <div style={{ border: "1px solid red" }}>
      <Intro />
      <Service />
      <Section2 />
      <Gallery/>
    </div>
  );
}

export default App;
