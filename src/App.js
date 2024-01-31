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
import { createContext, useState } from "react";

export const themeContext = createContext(null)

function App() {
  const [theme,setTheme] = useState('light')
  const handleTheme =()=>{
    setTheme(prev=>(prev==="light"?"dark":"light"))
  }
  return (
    <themeContext.Provider value={{theme,handleTheme}}>
     <div id={theme}>
     <NavMobile/>
      <Sidebar theme={theme} handleTheme={handleTheme}/>
      
      <About/>
      <TechStack/>
      <WorkExp  theme={theme}/>
      <Projects/>
      <Education theme={theme} />
      <Testimonial/>
      <Contact/>
     </div>
      <ScrollToTop
      smooth='true'
      width="20px"
      height="20px"
      color="white"
      style={{borderRadius:"90px", backgroundColor:" rgba(0, 0, 255, 0.5)",fontSize:'10px '}}/>
      
    </themeContext.Provider>
  );
}

export default App;
