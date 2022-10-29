import logo from "./logo.svg";
import "./App.css";
import Intro from "./component/Intro";
import Service from "./component/Service";
import Section2 from "./component/Section2";

function App() {
  return (
    <div style={{ border: "1px solid red" }}>
      <Intro />
      <Service />
      <Section2 />
    </div>
  );
}

export default App;
