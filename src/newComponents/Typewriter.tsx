import React, { useEffect, useState } from 'react';
import '../newStyles/HomePage.css';

interface TypewriterProps {
    phrases: string[];
    period: number;
}
const Typewriter: React.FC<TypewriterProps> = ({ phrases, period }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prevShowCursor) => !prevShowCursor);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const tick = () => {
            const i = loopNum % phrases.length;
            const fullTxt = phrases[i];

            if (isDeleting) {
                setText((prevText) => fullTxt.substring(0, prevText.length - 1));
            } else {
                setText((prevText) => fullTxt.substring(0, prevText.length + 1));
            }

            let newDelta = 200 - Math.random() * 100;

            if (isDeleting) {
                newDelta /= 2;
            }

            if (!isDeleting && text === fullTxt) {
                newDelta = period;
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum((prevLoopNum) => prevLoopNum + 1);
                newDelta = 500;
            }

            setDelta(newDelta);
        };

        const timer = setTimeout(() => {
            tick();
        }, delta);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, delta, phrases, period]);

    return (
        <h1>
            <span className="typewriter">{text}</span>
            {showCursor && <span className="typewriter" style={{padding: '0'}}>|</span>}
        </h1>
    );
};

export default Typewriter;
