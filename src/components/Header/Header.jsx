import './style.css';
import React from 'react'
import { BiRefresh } from "react-icons/bi";

const Header = () => {
    const heading = "</> Code Editor"
  return (
    <div className='header'>
        <h1>{heading}</h1>
        <span id='refresh-btn' onClick={() => window.location.reload()}><BiRefresh /></span>
    </div>
  )
}

export default Header