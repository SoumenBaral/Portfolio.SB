import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Sidebar from "./Components/SideBar/Sidebar";
import TechStack from "./Components/TechStack/TechStack";
import WorkExp from "./Components/WorkExp/WorkExp";
import Testimonial from "./Testimonial/Testimonial";
import ScrollToTop from "react-scroll-to-top";

import './App.css'
import NavMobile from "./Components/NavMobile/NavMobile";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <NavMobile/>
      <About/>
      <TechStack/>
      <WorkExp/>
      <Projects/>
      <Education/>
      <Testimonial/>
      <Contact/>
      <ScrollToTop
      smooth='true'
      width="20px"
      height="20px"
      color="white"
      style={{borderRadius:"90px", backgroundColor:" rgba(0, 0, 255, 0.5)",fontSize:'10px '}}/>
      
    </div>
  );
}

export default App;
