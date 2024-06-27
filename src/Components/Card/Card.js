import React,{useContext} from "react";
import "../Card/Card.css";
import {ThemeContext} from "../../Context";

const Card = (props) => {
    const [theme, setTheme] = useContext(ThemeContext);
    const { mainText, subText, handleFormInput } = props;

    return(
        <div className={`SuggestCard SuggestCardTheme-${theme}`} onClick={()=> handleFormInput(mainText)}>
        <span className='SuggestCard-mainText'>{mainText}</span>
        <span className='SuggestCard-subtext'>{subText}</span>
    </div>
    )
}


export default Card;