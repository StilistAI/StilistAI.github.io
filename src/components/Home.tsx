import Navbar from "./Navbar";
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import BannerBackground from "../assets/home-banner-background.png";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "../styles/Home.css";

function Home() {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div>
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" className="home-image-section"/>
            </div>
            <div className="home-container">
                <Navbar />
                <div className="home-banner-container">
                    <div className="home-text-section" id="home">
                        <h1 className="primary-heading">
                            Your Fashion Playground: Explore, Create, Showcase
                        </h1>
                        <p className="primary-text">
                            We take care of the details - from weather and dress codes to your wardrobe and personal preferences. Create and share perfect outfits for every occasion, and connect with a fashion-forward community. Make fashion fun and easy with our app!
                        </p>
                        <button className="secondary-button" onClick={handleOpen}>
                            Download Now <FiArrowRight />{" "}
                        </button>
                        <Snackbar open={openModal} autoHideDuration={2000} onClose={handleClose}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }} className='alert'>
                                Coming Soon!
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;