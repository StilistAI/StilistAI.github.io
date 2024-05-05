import '../newStyles/TeamPage.css';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.svg';
import ceren from '../assets/ceren.jpg';
import alp from '../assets/alp.jpeg';
import deniz from '../assets/deniz.jpg';
import aliemir from '../assets/aliemir.jpg';
import kagan from '../assets/kagan.jpg';
import ahmet from '../assets/ahmet.jpg';
import hamdi from '../assets/hamdi.jpg';

type TeamCardProps = {
    name: string;
    role: string;
    linkedin: string;
    image: string;
    github: string;
}
const TeamCard = ({name, role, linkedin, image, github}:TeamCardProps) => {
    return (
        <div className="teamCardContainer">
            <div className="teamCardImage">
                <img alt="Team Member" className="teamCardImage" src={image === 'ceren' ? ceren : image === 'alp' ? alp : image === 'deniz' ? deniz : image === 'aliemir' ? aliemir : image === 'kagan' ? kagan : image === 'hamdi' ? hamdi : ahmet } />
            </div>
            <div className="teamCardDetails">
                <h2>{name}</h2>
                <p>{role}</p>
                <div className="teamCardDetailsBox">
                    <a href={linkedin}><img src={linkedinIcon} alt=""/></a>
                    {github != "" && <a href={github}><img src={githubIcon} alt=""/></a>}
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
