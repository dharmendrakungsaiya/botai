import { useState } from 'react';
import './App.css';
import {ThemeContext} from "../src/Context";
import SideBar from './Components/Sidebar/Sidebar';
import Body from "./Components/Body/Body";
import likeOutlinedIcon from "../src/likeblack.svg";
import dislikeOutlinedIcon from "../src/dislikeblack.svg";
import likeFilledIcon from "../src/likefilledblack.svg";
import dislikeFilledIcon from "../src/dislikefilledblack.svg";
import { updateByLikeDislike } from "./Function";


function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarON, setSideBarON] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [pastConvo, setPastConvo] = useState(false);


  const iconsData = {likeOutlinedIcon, dislikeOutlinedIcon, likeFilledIcon, dislikeFilledIcon};


  const handleSideBar = () => setSideBarON(!sidebarON);

  const newChatClick = () => {
    setCurrentChat([]);
    setPastConvo(false);
  }
    
 

  const addChatMsg = (userMsg, botReply) => {
    setCurrentChat([...currentChat, userMsg, botReply]);
  }

  const clearCurrentChat = () => setCurrentChat([]);

  const handlePastConvo = () => setPastConvo(!pastConvo);

  const likeDislikeReply = (chatCardId, reaction) => setCurrentChat(updateByLikeDislike(chatCardId, reaction, currentChat, iconsData));

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
    <SideBar newChatClick={newChatClick} handleSideBar={handleSideBar} sidebarON={sidebarON} handlePastConvo={handlePastConvo}/>
    <Body likeDislikeReply={likeDislikeReply} pastConvo={pastConvo} clearCurrentChat={clearCurrentChat} addChatMsg={addChatMsg} currentChat={currentChat} handleSideBar={handleSideBar} sidebarON={sidebarON}/>
    </ThemeContext.Provider>
    </>
  );
}

export default App;

