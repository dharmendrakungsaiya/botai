
import React, { useContext, useState} from 'react';
import "../Chatingcard/Chatingcard.css";
import { ThemeContext } from "../../Context";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const RatingSize = () => {
    return (
        <Stack spacing={1}>
            <Rating name="size-small" defaultValue={2} size="small" />
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={2} size="large" />
        </Stack>
    );
};

const Thumbs = ({ likeDislikeReply, id, like, dislike }) => {
    return (
        <span className='thumbsWraper'>
            <img src={like} alt='like button' onClick={() => likeDislikeReply(id, "like")} />
            <img src={dislike} alt='dislike button' onClick={() => likeDislikeReply(id, "dislike")} />
        </span>
    );
};

const Chatingcard = (props) => {
    const { name, message, time, icon, customClass, likeDislikeReply, id, like, dislike } = props;
    const [rate, setRate] = useState({});
    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <div className={`ChatCard ChatCardTheme-${theme} ${customClass}`}>
            <span className='chatCardImage-wrapper'>
                <img src={icon} alt={`${name} icon`} className='chatCardImage' />
            </span>
            <span className='chatCardTexts'>
                <span className='chatCardName'>{name}</span>
                <span className='chatCardMessage'>
                    <span className='messageAppear'>{message}</span>
                </span>
                <span className='chatCardTime'>
                    <span> {time} </span>
                    {name === "bot ai" ? <Thumbs like={like} dislike={dislike} likeDislikeReply={likeDislikeReply} id={id} /> : null}
                </span>
            </span>
        </div>
    );
};

export default Chatingcard;


