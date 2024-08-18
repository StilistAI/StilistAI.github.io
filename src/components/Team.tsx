import '../styles/Team.css';
import TeamBackground from '../assets/team-background.svg';
import TeamCard from './TeamCard';

function Team() {
    const teamMembers = [
        { name: 'Ali Emir Güzey', role: 'Backend & Infrastructure', image: 'aliemir', link: 'https://www.linkedin.com/in/ali-guzey' },
        { name: 'Ceren Akyar', role: 'UI/UX Design & Frontend', image: 'ceren', link: 'https://www.linkedin.com/in/ceren-akyar-a477911b7' },
        { name: 'Mehmet Kağan İlbak', role: 'Machine Learning', image: 'kagan', link: 'https://www.linkedin.com/in/kaganilbak' },];

    const advisors = [
        { name: 'Asst. Prof. Hamdi Dibeklioğlu', role: 'Supervisor', image: 'hamdi', link: 'https://www.linkedin.com/in/dibeklioglu/'},];
    return (

        <div className='team-container mt-0 mb-0'>
            <div className='team-background-container'>
                <img src={TeamBackground} alt="" className='team-background-img'/>
            </div>
            <div className='team-members-container pt-32 mt-0 mb-0' id='team'>
                <h1 className="modal-title">Meet Our Team</h1>
                <p>
                    "Algoritma Arkadaşları"
                </p>
                <div className='team-card-holder-col1'>
                    {teamMembers.slice(0, 3).map((member, index) => {
                        return (
                            <TeamCard key={index} name={member.name} role={member.role} image={member.image} link={member.link} />
                        );
                    })}
                </div>

                <h1 className="modal-title mb-8">Our Advisors</h1>
                <div className=''>
                    {advisors.map((member, index) => {
                        return (
                            <TeamCard key={index} name={member.name} role={member.role} image={member.image} link={member.link} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Team;
