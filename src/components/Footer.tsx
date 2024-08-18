import "../styles/Footer.css"
const Footer = () => {

    return (
        <footer>
            <div>
                <p>&copy; 2024 <span className="stylish-text" style={{fontSize: "12px"}}> Stilist</span> | Your Style, Your Way, Everyday.</p>
                <p>
                    For any inquiries, please contact {" "}
                    <a href="mailto:info@stilist.ai">info@capsule.style</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
