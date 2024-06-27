import React, { useContext } from 'react';
import "../Button/Button.css";
import { ThemeContext } from '../../Context';

const Button = (props) => {
    const { clickFunction, text, type, customClass } = props;
    const [theme, setTheme] = useContext(ThemeContext)
    return (
        <button onClick={clickFunction} className={`Button ButtonTheme-${theme} ${customClass}`} type={type} >
            {text || "text"}
        </button>
    );
};

export default Button;