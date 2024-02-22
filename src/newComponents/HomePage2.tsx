import '../newStyles/HomePage.css';
import phone from '../assets/homePagePhone.png';
import Typewriter from "./Typewriter.tsx";

function HomePage2() {
    return (
        <div className="HomePage">
            <div className="homePageTextContainer">
                <h1>YOUR FASHION PLAYGROUND:</h1>
                <Typewriter
                    phrases={['Explore,', 'Create,', 'Showcase.','All in One.' ]}
                    period={1700}
                />
                <div className="whiteLine"></div>
                <p>
                    We take care of the details - from weather and dress codes to your wardrobe and personal
                    preferences. Create and share perfect outfits for every occasion, and connect with a fashion-forward
                    community. Make fashion fun and easy with our app!
                </p>
                <button className="primary-button homePageBtn">Download Now</button>
            </div>
            <div className="homePageImgContainer">
                <img src={phone} alt=""/>
            </div>
        </div>
    );
}

export default HomePage2;
