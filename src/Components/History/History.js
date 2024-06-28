import React, { useEffect, useState } from 'react';
import "../History/History.css";
import Conversation from "../Conversation/Conversation";
import { ThemeContext } from "../../Context";



const History = () => {
    
    const [convos, setConvos] = useState([]);
    
    useEffect(()=> {
        loadConvos();
    }, []);
    
    const loadConvos = () => {
        const allConvos = window.localStorage.getItem("pastConversations");
        if(allConvos) setConvos(JSON.parse(allConvos));
    }
    const displayCards = () => convos.map(item => {
        const {id, conversation} = item;
        return <Conversation id={id} key={id} conversation={conversation} />
    });

    return (
        <div className='PastConvo'>
            <h4>Conversation History</h4>
            <div className='pastConvoBody'>
                {convos.length ? displayCards() : <h2>No Past Conversations Found</h2> }
            </div>
        </div>
    );
};

export default History;