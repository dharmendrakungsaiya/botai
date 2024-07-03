import React, { useContext } from 'react';
import "../Body/Body.css";
import menuIcon from "../../../src/menu.svg";
import { ThemeContext } from "../../Context";
import Chatingcard from '../Chatingcard/Chatingcard';
import History from '../History/History';

const AppBody = (props) => {
    
    const { handleSideBar, sidebarON, currentChat, addChatMsg, clearCurrentChat, pastConvo, likeDislikeReply } = props;
    
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <div className={`AppBody AppBodyTheme-${theme}`}>
            <div className='AppBodyHead'>
                {
                    !sidebarON ? <img onClick={handleSideBar} src={menuIcon} alt='menu icon' /> : null
                }
                <h1>Bot AI</h1>
            </div>
            {
                pastConvo ?
                <History />
                :
                <Chatingcard likeDislikeReply={likeDislikeReply} clearCurrentChat={clearCurrentChat} addChatMsg={addChatMsg} currentChat={currentChat}/>
            }
        </div>
    );
};



export default AppBody;