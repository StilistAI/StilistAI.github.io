import { useState } from 'react';
import Logo from '../assets/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import '../styles/Navbar.css';



function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const menuOptions = [
        { title: 'Home', Icon: HomeIcon, link: '#home' },
        { title: 'Team', Icon: GroupsIcon, link: '#team' },
        { title: 'Reports', Icon: SummarizeIcon, link: '#reports' },];

    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={Logo} alt='CAPSULE' className='nav-logo' />
            </div>
            {isMenuOpen && (
                <div className='navbar-links-container'>
                    {menuOptions.map((option, index) => {
                        return (
                            <a href={option.link} key={index} className='navbar-link'>{option.title}</a>
                        );
                    })}
                    <button className='primary-button' onClick={handleOpen}>Download Now</button>
                    <Snackbar open={openModal} autoHideDuration={2000} onClose={handleClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }} className='alert'>
                            Coming Soon!
                        </Alert>
                    </Snackbar>
                </div>
            )}
            {!isMenuOpen && (
                <HiOutlineBars3 className='navbar-menu-container' onClick={() => setIsMenuOpen(true)} />
            )}
        </nav>
    );
}

export default Navbar;