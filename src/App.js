import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Sidebar from "./Components/SideBar/Sidebar";
import TechStack from "./Components/TechStack/TechStack";
import WorkExp from "./Components/WorkExp/WorkExp";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <About/>
      <TechStack/>
      <Projects/>
      <WorkExp/>
    </div>
  );
}

export default App;
