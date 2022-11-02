import '../public/css/footer.module.css';

const Footer = () => {
    return (
        <>
            <div id="footer">
            <p id="footer-emails">Abuse: abuse@kevvynode.org<br />Sales: sales@kevvynode.org</p>
            <p>Current build: <span id="current-commit"></span></p>
            # https://docs.github.com/en/rest/commits/commits#get-a-commit
        </div>
        
        </>
    );
}

export default Footer;