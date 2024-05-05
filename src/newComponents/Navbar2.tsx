import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SummarizeIcon from "@mui/icons-material/Summarize";
import LogoDark from "../assets/logoDarkMode.svg";
import LogoLight from "../assets/logoLightMode.svg";
import "../styles/Navbar.css";
import {useState} from "react";

interface NavbarProps {
    selectedPage: (page: string) => void;
}

function Navbar2({ selectedPage }: NavbarProps) {

    const menuOptions = [
        { title: 'Home', Icon: HomeIcon, link: 'home' },
        { title: 'About', Icon: HomeIcon, link: 'about' },
        { title: 'Team', Icon: GroupsIcon, link: 'team' },
        { title: 'Reports', Icon: SummarizeIcon, link: 'reports' },
    ];

    const [currentPage, setCurrentPage] = useState('home');

    const handlePageChange = (link: string) => {
        selectedPage(link);
        setCurrentPage(link);
    };

    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={currentPage === 'home' || currentPage === 'team'
                    ? LogoDark : LogoLight } alt='CAPSULE' className='nav-logo' style={currentPage === "home" ? {fill: 'white'} : {fill: 'black'}}/>
            </div>
            <div className="navbar-links-container">
                {menuOptions.map((option, index) => {
                    return (
                        <p onClick={() => handlePageChange(option.link)} key={index} className={`navbar-link ${currentPage === 'home' || currentPage === 'team'
                            ? 'navbarDarkLinks' : 'navbarLightLinks'} ${currentPage === option.link ? 'underlineLink' : ''}`}>{option.title}</p>
                    );
                })}
                <button className={`primary-button ${currentPage === 'home' ? 'homePageNavbarBtn' : currentPage === 'about' ? 'aboutPageNavbarBtn' : currentPage === 'team' ? 'teamPageNavbarBtn' : 'reportPageNavbarBtn'}`}>Download Now</button>
            </div>
        </nav>
    );
}

export default Navbar2;
