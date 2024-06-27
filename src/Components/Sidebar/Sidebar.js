import React, { useContext } from 'react';
import "../Sidebar/Sidebar.css";
import icon from "../../../src/icon.png";
import penIcon from "../../../src/pen.png";
import closeBlackIcon from "../../../src/closeBlack.svg";
import closeWhiteIcon from "../../../src/closeWhite.svg";
import { ThemeContext } from '../../Context';
import Button from '../Button/Button';

const SideBar = (props) => {
    
    const { handleSideBar, sidebarON, handlePastConvo, newChatClick } = props;
    
    const [theme, setTheme] = useContext(ThemeContext)


    const sideBarForLarge = () => {
        return (
            <aside className={`SideBar SideBarTheme-${theme} SideBar-large`}>
                <div onClick={newChatClick} className={`sideBarHead sideBarHeadTheme=${theme}`}>
                    <img src={icon} alt="app icon" className='appLogo'/>
                    <h2>New Chat</h2>
                    <img src={penIcon} alt='pen icon' className='penIcon'/>
                    
                </div>
                <div className='sideBarBody'>
                    <Button clickFunction={handlePastConvo} text={"Past Conversations"} customClass="pastConvo"/>
                </div>
            </aside>
        )}


        const sideBarForSmall = () => {
            return (
                <aside className={`SideBar SideBarTheme-${theme} SideBar-small`}>
                    <div onClick={newChatClick} className={`sideBarHead sideBarHeadTheme=${theme}`}>
                        <img src={icon} alt="app icon" className='appLogo'/>
                        <h2>New Chat</h2>
                        <img src={penIcon} alt='pen icon' className='penIcon'/>
                        
                    </div>
                    <div className='sideBarBody'>
                        <Button clickFunction={handlePastConvo} text={"Past Conversations"} customClass="pastConvo"/>
                    </div>
                    {
                        sidebarON ? 
                        <img onClick={handleSideBar} src={closeBlackIcon} alt="close button" className='closeSideBarButton'/>
                        :
                        null
                    }
                </aside>
            )
        }


        return (
            <>
                {sideBarForLarge()}
                {sidebarON ? sideBarForSmall() : null}
            </>
        );
    };
    
    export default SideBar;