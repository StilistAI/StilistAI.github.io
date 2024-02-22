import Navbar2 from "./Navbar2.tsx";
import "../newStyles/MainPage.css";
import {useState} from "react";
import HomePage2 from "./HomePage2.tsx";
import AboutPage2 from "./AboutPage2.tsx";
import TeamPage2 from "./TeamPage2.tsx";
import ReportsPage2 from "./ReportsPage2.tsx";

function MainPage2() {
    const [selectedPage, setSelectedPage] = useState('home');


    return (
        <div className={`mainPageContainer ${selectedPage === 'home' ? 'homePageBackground' : selectedPage === 'about' ? 'aboutPageBackground': selectedPage === 'team' ? 'teamPageBackground' : 'reportPageBackground'}`}>
            <Navbar2 selectedPage={setSelectedPage}/>
            <div>
                {selectedPage === 'home' && <HomePage2 />}
                {selectedPage === 'about' && <AboutPage2 />}
                {selectedPage === 'team' && <TeamPage2 />}
                {selectedPage === 'reports' && <ReportsPage2 />}
            </div>
        </div>
    );
}

export default MainPage2;
