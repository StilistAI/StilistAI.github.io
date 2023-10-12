import "../styles/Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {

    return (
        <footer>
            <div>
                <p>&copy; 2023 Capsule | Your Fashion Playground</p>
                <p>
                    <GitHubIcon className="footer-icon" />
                    <a href="https://github.com/algoritma-arkadaslari">Our GitHub Account</a>
                </p>
                <p>
                    For any inquiries, please contact {" "}
                    <a href="mailto:info@capsule.com">info@capsule.style</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
