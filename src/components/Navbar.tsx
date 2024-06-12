import { useState, useEffect  } from 'react';
import Logo from '../assets/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { HiOutlineBars3 } from 'react-icons/hi2';
import '../styles/Navbar.css';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Link,
    Typography,
} from '@mui/material';



function Navbar() {

    // learn page width to adjust navbar:
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    const updatePageWidth = () => {
        setPageWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updatePageWidth);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updatePageWidth);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(pageWidth > 800);
        if ( hamburgerMenuOpen )
            setHamburgerMenuOpen( pageWidth < 800 )
    }, [pageWidth]);


    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

    const menuOptions = [
        { title: 'Home', Icon: HomeIcon, link: 'home' },
        { title: 'About', Icon: SummarizeIcon, link: 'about' },
        { title: 'Team', Icon: GroupsIcon, link: 'team' },
        ];

    return (
        <nav>
            <div className="nav-container">
            { isMenuOpen &&
                <div className='nav-logo-container'>
                    <img src={Logo} alt='CAPSULE' className='nav-logo' />
                </div>
            }
            {isMenuOpen && (
                <div className='navbar-links-container'>
                    {menuOptions.map((option, index) => {
                        return (
                            <a href={option.link} key={index} className='navbar-link'>{option.title}</a>
                        );
                    })}
                    <button className='primary-button' onClick={handleOpen}>Download</button>

                </div>
            )}

            {!isMenuOpen && (
                <HiOutlineBars3 className='navbar-menu-container' onClick={ () => setHamburgerMenuOpen(!hamburgerMenuOpen)}/>)
            }
                {hamburgerMenuOpen && (  <div className="small-menu-container">
                    {

                        menuOptions.map((option, index) => (
                            <a key={index} href={option.link}>
                                <option.Icon className='navbar-link-icon' fontSize="large" />
                            </a>
                        ))
                    }
                </div>)}



            </div>
            {/* Modal Code */}
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle className="modal-title">Thank You For Your Interest!</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" className="modal-secondary-text">
                        The app is almost ready for launch. Please join our waitlist to be the first to know when it is available for download.
                    </Typography>
                    <Link href="https://lnkd.in/dkPJFTCb" target="_blank" rel="noopener" underline="hover" sx={{ display: 'block', marginTop: '16px' }} className="modal-link">
                        <Typography variant="body1" className="modal-link">
                            Join Our Waitlist Now
                        </Typography>
                    </Link>
                </DialogContent>
            </Dialog>
        </nav>
    );
}

export default Navbar;
