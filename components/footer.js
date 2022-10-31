import '../css/footer.module.css';
import Script from 'next/script';

const Footer = () => {
    return (
        <div id="footer">
            <p id="footer-emails">Abuse: abuse@kevvynode.org<br />Sales: sales@kevvynode.org</p>
            <p>Current build: <span id="current-commit"></span></p>
            # https://docs.github.com/en/rest/commits/commits#get-a-commit
            <Script src="../js/footer.module.js"></Script>
        </div>
    );
}

export default Footer;