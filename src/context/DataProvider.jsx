import { useState } from "react";
import DataContext from "./DataContext";

const DataProvider = (props) => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    return(
        <DataContext.Provider value={{
            html, setHtml, css, setCss, js, setJs
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;