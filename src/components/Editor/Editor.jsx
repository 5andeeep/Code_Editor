import './style.css';
import React, { useState } from 'react';
import { BiCollapseVertical } from "react-icons/bi";
import NewEditor from "@monaco-editor/react";

const Editor = ({lang, logo, logoColor, language, value, onChange}) => {
    const [open, setOpen] = useState(true);


    const handleChange = (value) => {
      onChange(value);
    }    
    const handleCollapse = () => {
        setOpen(prevState => !prevState);
    }
  return (
    <div className='editor' style={open?null: {flex: 0}}>
        <div className='head'>
            <span className='lang-logo' style={{color: logoColor}}>{logo}</span>
            <span className='language'>{lang}</span>
            <span id='collapse-btn' onClick={handleCollapse}><BiCollapseVertical /></span>
        </div>
        <NewEditor 
          height='100%'
          language={language}
          theme='vs-dark'
          value={value}
          onChange={handleChange}
        />
    </div>
  )
}

export default Editor;
