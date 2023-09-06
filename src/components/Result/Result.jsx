import './style.css';
import React, {useContext, useState, useEffect} from 'react'
import DataContext from '../../context/DataContext';

const Result = () => {
    const {html, css, js} = useContext(DataContext);

    const [src, setSrc] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 1000)

        return () => {
            clearTimeout(timeout);
        }
    }, [html, css, js])


    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

  return (
    <div className='result-section'>
        <iframe 
            srcDoc={src}
            frameBorder={0}
            title='Output'
            sandbox='allow-scripts'
            width='100%'
            height='100%'
        />
    </div>
  )
}

export default Result;