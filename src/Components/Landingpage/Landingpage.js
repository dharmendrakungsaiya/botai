import React, { useContext } from 'react';
import "../Landingpage/Landingpage.css";
import icon from "../../../src/icon.png";
import {ThemeContext} from "../../Context";
import Card from '../Card/Card';

const subText = "Get immediate AI generated response";

const Landingpage = ({handleFormInput}) => {

    const [theme, setTheme] = useContext(ThemeContext)
    return(
        <div className={`Intro IntroTheme-${theme}`}>
            <div className='introQuestion'>
                <h1>How Can I Help You Today?</h1>
                <img src={icon} alt="icon" />
            </div>
            <div className='introCards'>
                <Card handleFormInput={handleFormInput} mainText="Hi, what is the weather" subText={subText}/>
                <Card handleFormInput={handleFormInput} mainText="Hi, what is my location" subText={subText}/>
                <Card handleFormInput={handleFormInput} mainText="Hi, what is the temperature" subText={subText}/>
                <Card handleFormInput={handleFormInput} mainText="Hi, how are you" subText={subText}/>
            </div>
        </div>
    )
}


export default Landingpage;