import React from 'react';
import "../Conversation/Conversation.css";
import Chatingcard from '../Chatingcard/Chatingcard';
import { ThemeContext } from "../../Context";

const ConvoCard = ({id, conversation}) => {
    
    const displayCards = () => {
        return conversation.map(card => {
            const { icon, name, message, time, id, like, dislike } = card;
            return <Chatingcard like={like} dislike={dislike} customClass="insidePast" key={id} icon={icon} name={name} message={message} time={time}/>
        })
    }
    return (
        <div className='ConvoCard'>
            {displayCards()}
        </div>
    )
}

export default ConvoCard;