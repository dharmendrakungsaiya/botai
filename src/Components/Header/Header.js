import React, { useContext, useEffect } from 'react';
import "../Header/Header.css";
import { ThemeContext } from "../../Context";
import Sampledata from "../../Sampledata.json";
import Form  from "../Form/Form";
import Landingpage from "../Landingpage/Landingpage";
import icon from "../../../src/icon.png";
import icon1 from "../../../src/icon.png";
import likeOutlinedIcon from "../../../src/likeblack.svg";
import dislikeOutlinedIcon from "../../../src/dislikeblack.svg";
import Chatingcard from '../Chatingcard/Chatingcard';
import { createTimeStamp, findQuestionFromSampleData, saveChatToLocal } from './../../Function';



    const Header = (props) => {
    
    const { currentChat, addChatMsg, clearCurrentChat, likeDislikeReply } = props;
    
    const [theme, setTheme] = useContext(ThemeContext);
    
    useEffect(()=>{
        if(!currentChat) return
        scrollToBottom();
    }, [currentChat])
    
    const handleFormInput = text => {

        const responseArr = findQuestionFromSampleData(Sampledata, text);

        const userCard = {
            icon: icon1,
            name: "you",
            message: text,
            time: createTimeStamp(),
            id: `you-${new Date() / 1}`,
        }

        const botCard = {
            icon: icon,
            name: "bot ai",
            message: responseArr?.[0]?.response || "something went wrong...",
            time: createTimeStamp(),
            id: `botAI-${new Date() / 1}`,
            like: likeOutlinedIcon,
            dislike: dislikeOutlinedIcon,
    
        }

        addChatMsg(userCard, botCard);
    }
    const displayCards = () => {

        if(!currentChat || !currentChat.length) return [];

        return currentChat.map(card => {
            const { icon, name, message, time, id, like, dislike } = card;
            let customClass
            if(name === "bot ai") customClass = "botCard";
            else customClass = "userCard"
            return <Chatingcard like={like} dislike={dislike} id={id} likeDislikeReply={likeDislikeReply} customClass={customClass} key={id} icon={icon} name={name} message={message} time={time}/>
        })
    }
    const saveChat = () => {
        if(!currentChat || !currentChat.length) return alert("No Conversation to save.")
        saveChatToLocal(currentChat);
        clearCurrentChat();
        alert("Conversation saved!")
    }
    
    function scrollToBottom() {
        var container = document.getElementById("cardsWrapper");
        if(!container) return;
        container.scrollTop = container.scrollHeight;
    }

    return (
        <div className={`ChatBody ChatBodyTheme-${theme}`}>
        {
            currentChat?.length ?
            <>
                <div className='cardsWrapper' id="cardsWrapper">
                    {displayCards()}
                </div>
                <Form handleFormInput={handleFormInput} saveChat={saveChat}/>
            </>
            :
            <>
                <Landingpage handleFormInput={handleFormInput}/>
                <Form handleFormInput={handleFormInput} />
            </>
        }
            
        </div>
    );
};

export default Header;

