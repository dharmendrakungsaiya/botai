import React, { useContext, useState } from 'react';
import "../Form/Form.css";
import { ThemeContext } from "../../Context";
import Button from '../Button/Button';

const Form = (props) => {
    
    const { handleFormInput, saveChat } = props;
    
    const [text, setText] = useState("");
    
    const [theme, setTheme] = useContext(ThemeContext);
    
    const handleSubmit = event => {
        event.preventDefault();
        handleFormInput(text);
        setText("");
    }
    return (
        <div className='Form-wrapper'>
            <form className='Form' onSubmit={handleSubmit}>
                <input value={text} onChange={e => setText(e.target.value)} required />
                <Button text="ask" type="submit" />
            </form>
            <Button text="save" clickFunction={saveChat}/>
        </div>
    );
};

export default Form;