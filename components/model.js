import '../css/model.module.css';
import Script from 'next/script';

const Model = () => {
    return (
        <>
        <div>
            <h1 id="header">KevvyNode - Please refresh the page.</h1>
            <div>
                <p id="body">Hello! A newer build of the site is available. Please refresh the page. <br />Build ID: <span></span></p>
            </div>
            <button onclick="">Close</button> 
        </div>
        <Script src="../js/model.module.js"></Script>
        </>
    )
}

export default Model;