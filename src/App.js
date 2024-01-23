import About from "./Components/About/About";
import Sidebar from "./Components/SideBar/Sidebar";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <About/>
      <TechStack/>
    </div>
  );
}

export default App;
