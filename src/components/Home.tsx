import Navbar from "./Navbar";
import { useState } from 'react';
import HomeImg from "../assets/segmentation.gif";
import frame from "../assets/iphone-frame.png";

import partner1 from "../assets/microsoft.jpg";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "../styles/Home.css";

function Home() {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div>
            <div className="home-container">
                <Navbar />
                <div className="home-banner-container">
                    <div className="home-text-section" id="home">
                        <h2 className={"secondary-heading"}>YOUR FASHION PLAYGROUND</h2>
                        <h1 className="primary-heading">
                            CAPSULE.
                        </h1>
                        <div className="button-groups">
                            <button className="secondary-button" onClick={handleOpen}>
                                DOWNLOAD
                            </button>
                            <button className="primary-button">
                                ABOUT US
                            </button>
                        </div>

                        <h2 className="partners-heading">PARTNERS</h2>
                        <div className="partners">
                            <img src={partner1} alt=""/>
                        </div>

                        <Snackbar open={openModal} autoHideDuration={2000} onClose={handleClose}
                            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }} className='alert'>
                                Coming Soon!
                            </Alert>
                        </Snackbar>
                    </div>
                    <div className="phone-frame-container">
                        <img src={frame} alt="Phone Frame" className="phone-frame" />
                            <div className="gif-container">
                                <img src={HomeImg} alt="" className="gif" />
                            </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

/*
                   <div className="home-primary-image-section">
                       <img src={HomeImg} alt={""} className={"home-image"}/>
                   </div>
                   */

export default Home;
