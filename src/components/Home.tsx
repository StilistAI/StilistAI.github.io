import Navbar from "./Navbar";
import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import BannerBackground from "../assets/home-banner-background.svg";
import HomeImg from "../assets/home-img.svg";
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
                            Your Style, Your Way, Every Day
                        </h1>
                        <p className="primary-text">
                            Discover, plan, and analyze your outfits effortlessly with Capsule. Get personalized recommendations, coordinate with friends for special occasions, and track your daily style choices.
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
                    <div className="home-primary-image-section">
                        <img src={HomeImg} alt={""} className={"home-image"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
