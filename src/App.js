import { useState } from 'react';
import './App.css';
import {ThemeContext} from "../src/Context";
import Landingpage from './Components/Landingpage/Landingpage';
import SideBar from './Components/Sidebar/Sidebar';


function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarON, setSideBarON] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [pastConvo, setPastConvo] = useState(false);
  const handleSideBar = () => setSideBarON(!sidebarON);
  const newChatClick = () => {
    setCurrentChat([]);
    setPastConvo(false);
  }
  const handlePastConvo = () => setPastConvo(!pastConvo);
  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
    <SideBar newChatClick={newChatClick} handleSideBar={handleSideBar} sidebarON={sidebarON} handlePastConvo={handlePastConvo}/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
