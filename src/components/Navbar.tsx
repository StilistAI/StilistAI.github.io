import { useState, useEffect  } from 'react';
import Logo from '../assets/logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { HiOutlineBars3 } from 'react-icons/hi2';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import '../styles/Navbar.css';



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
        { title: 'Home', Icon: HomeIcon, link: '#home' },
        { title: 'Team', Icon: GroupsIcon, link: '#team' },
        { title: 'Reports', Icon: SummarizeIcon, link: '#reports' },];

    return (
        <nav>
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
                <HiOutlineBars3 className='navbar-menu-container' onClick={ () => setHamburgerMenuOpen(!hamburgerMenuOpen)}/>)
            }
            {hamburgerMenuOpen && (
                menuOptions.map((option, index) => (
                    <a key={index} href={option.link}>
                        <option.Icon fontSize="large"/>
                    </a>
                ))
            )}

        </nav>
    );
}

export default Navbar;
