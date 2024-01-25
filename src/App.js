import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Sidebar from "./Components/SideBar/Sidebar";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <About/>
      <TechStack/>
      <Projects/>
    </div>
  );
}

export default App;
