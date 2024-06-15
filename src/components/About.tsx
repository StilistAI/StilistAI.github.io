import "../styles/About.css";
import swipingVideo from "../assets/swipingVideo.mp4";
import phoneFrame from '../assets/phoneFrame.png';
import phone from '../assets/phone.png';
import outfitPhoto from '../assets/outfit.svg';

function About() {
    return (
        <div className={"about"} id={"about"}>
            <div className="about-container">
                <h1 className="modal-title ">CAPSULE - How to Use?</h1>
                <div className="description-container justify-start">
                    <div className="phone-frame">
                        <video className="phone-video" src={swipingVideo} loop autoPlay muted />
                        <img className="phone-image" src={phoneFrame} alt="Phone Frame" />
                    </div>
                    <div className="description-text-container">
                        <p>
                            Get daily outfit recommendations according to your style, the weather, the occasion, and your outfit preferences!
                            <br/>Swipe right to save an outfit to your wardrobe, or swipe left to view the next outfit.
                        </p>
                        <div className="red-line-thin"></div>
                        <p>
                            Track your outfits daily and view your wardrobe insights including the outfits you wear the most, the least, number of clothes you own and more!
                        </p>
                    </div>
                </div>

                <div className="description-container justify-end">
                    <div className="description-text-container">
                        <p>
                            Get daily outfit recommendations according to your style, the weather, the occasion, and your outfit preferences!
                            <br/>Swipe right to save an outfit to your wardrobe, or swipe left to view the next outfit.
                        </p>
                        <div className="red-line-thin"></div>
                        <p>
                            Track your outfits daily and view your wardrobe insights including the outfits you wear the most, the least, number of clothes you own and more!
                        </p>
                    </div>
                    <div className="phone-frame">
                        <video className="phone-video" src={swipingVideo} loop autoPlay muted />
                        <img className="phone-image" src={phoneFrame} alt="Phone Frame" />
                    </div>
                </div>

                <div className="description-container justify-center mt-24">
                    <img className="yellow-phone" src={phone} alt="Phone Frame" />
                    <div className="description-text-container">
                        <p>
                            Share what you wear with your friends and followers! Just log the outfit you wore and Capsule shares it with your followers.
                        </p>
                        <div className="red-line-thin"></div>
                        <p>
                            You can also view your friends' outfits, learn what they will wear today, and get inspired by their style!
                        </p>
                    </div>
                    <img className="outfit-photo" src={outfitPhoto} alt="Phone Frame" />
                </div>

            </div>
        </div>
    );
}

export default About;
