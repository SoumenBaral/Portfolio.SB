import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Sidebar from "./Components/SideBar/Sidebar";
import TechStack from "./Components/TechStack/TechStack";
import WorkExp from "./Components/WorkExp/WorkExp";
import Testimonial from "./Testimonial/Testimonial";



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <About/>
      <TechStack/>
      <WorkExp/>
      <Projects/>
      <Education/>
      <Testimonial/>
      
    </div>
  );
}

export default App;
