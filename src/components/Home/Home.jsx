import "./style.css";
import React, { useContext } from 'react';
import DataContext from "../../context/DataContext";
import Header from '../Header/Header';
import Editor from '../Editor/Editor';
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import Result from "../Result/Result";

const Home = () => {

  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);

  return (
    <div className='home'>
        <Header />
        <div className="editors-result-container ">
          <div className='editors-container'>
            <Editor 
              lang="HTML"
              logo={<BiLogoHtml5 />}
              logoColor={"#E34C26"}
              language="xml"
              value={html}
              onChange={setHtml}
            />
            <Editor 
              lang="CSS"
              logo={<BiLogoCss3 />}
              logoColor={"#264EE4"}
              language='css'
              value={css}
              onChange={setCss}
            />
            <Editor 
              lang="JS"
              logo={<BiLogoJavascript />}
              logoColor={"#F7DF1E"}
              language='javascript'
              value={js}
              onChange={setJs}
            />
          </div>
          <Result />
        </div>
    </div>
  )
}

export default Home