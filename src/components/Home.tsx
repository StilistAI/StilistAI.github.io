import { useState } from 'react';
import partner1 from "../assets/microsoft.png";
import mainImg from "../assets/heroImg.svg";
import "../styles/Home.css";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Link,
    Typography,
} from '@mui/material';

function Home() {
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div className={"home"} id={"home"}>
            <div className="home-container">
                <div className="home-text-section">
                    <h1 className="primary-heading">CAPSULE</h1>
                    <h2 className="secondary-heading">Your Style. Your Way. Everyday.</h2>
                    <div className="red-line"></div>
                    <p className="primary-p">Capsule is your virtual wardrobe. Get outfit recommendations for every occasion, track your outfits daily and view your wardrobe usage with our app!</p>
                    <h3 className="partners-heading">
                        Partnered With:
                    </h3>
                    <div className="partners">
                        <img src={partner1}
                            alt="Microsoft"
                            className="partner-image"
                        />
                    </div>
                    <div className="button-holder">
                        <button className="primary-button" onClick={handleOpen}>
                            Download
                        </button>
                    </div>
                </div>
                <div className="home-image-section">
                    <img src={mainImg} alt="" className=""/>
                </div>
            </div>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle className="modal-title">Thank You For Your Interest!</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" className="modal-secondary-text">
                        The app is almost ready for launch. Please join our waitlist to be the first to know when it is available for download.
                    </Typography>
                    <Link href="https://forms.gle/288crQsrGPsJ5SwL8" target="_blank" rel="noopener" underline="hover" sx={{ display: 'block', marginTop: '16px' }} className="modal-link">
                        <Typography variant="body1" className="modal-link">
                            Join Our Waitlist Now
                        </Typography>
                    </Link>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Home;
