import { useState, useEffect  } from 'react';
import Logo from '../assets/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SummarizeIcon from '@mui/icons-material/Summarize';
import '../styles/Navbar.css';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Link,
    Typography,
} from '@mui/material';
import { useLocation } from 'react-router-dom';



function Navbar() {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const menuOptions = [
        { title: 'Home', Icon: HomeIcon, link: '/home#home' },
        { title: 'About', Icon: SummarizeIcon, link: '/home#about' },
        { title: 'Team', Icon: GroupsIcon, link: '/team' },
        ];

    const location = useLocation();

    return (
        <nav>
            <div className="nav-container">
                <div className='nav-logo-container'>
                    <img src={Logo} alt='CAPSULE' className='nav-logo' />
                </div>
                <div className='navbar-links-container'>
                    {menuOptions.map((option, index) => {
                        const [optionPath, optionHash] = option.link.split('#');
                        const isActive =
                            (location.pathname === optionPath && (!optionHash || location.hash === `#${optionHash}`)) ||
                            // Additionally, consider root path or empty path as active for 'Home'
                            (location.pathname === '/' && option.title === 'Home');

                        return (
                            <a
                                href={option.link}
                                key={index}
                                className={`navbar-link ${isActive ? 'active' : ''}`}>
                                {option.title}
                            </a>
                        );
                    })}
                    <button className='primary-button nav-button' onClick={handleOpen}>Download</button>
                </div>
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
