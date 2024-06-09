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
        <div className={"home"}>
            <div className="home-container">
                <div className="home-text-section">
                    <h1 className="primary-heading">CAPSULE</h1>
                    <h2 className="secondary-heading">Your Style. Your Way. Everyday.</h2>
                    <div className="red-line"></div>
                    <p className="primary-p">Capsule is your virtual wardrobe. Get outfit recommendations for every occasion, track your outfits daily and view your wardrobe usage with our app!</p>
                    <h3 className="partners-heading">
                        Partnered With:
                    </h3>
                </div>
                <div className="home-image-section">

                </div>
            </div>
        </div>
    );
}

export default Home;
