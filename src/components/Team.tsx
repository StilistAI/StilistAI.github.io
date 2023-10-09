import '../styles/Team.css';
import TeamBackground from '../assets/team-background.png';
import TeamCard from './TeamCard';

function Team() {
    const teamMembers = [
        { name: 'Ali Emir Güzey', role: 'Project Manager', image: 'aliemir', link: 'https://www.linkedin.com/in/deniz-mert-dilaverler-997b271b9' },
        { name: 'Alp Afyonluoğlu', role: 'Project Manager', image: 'alp', link: 'https://www.linkedin.com/in/deniz-mert-dilaverler-997b271b9' },
        { name: 'Ceren Akyar', role: 'Project Manager', image: 'ceren', link: 'https://www.linkedin.com/in/ceren-akyar-a477911b7' },
        { name: 'Deniz Mert Dilaverler', role: 'Project Manager', image: 'deniz', link: 'https://www.linkedin.com/in/deniz-mert-dilaverler-997b271b9' },
        { name: 'Mehmet Kağan İlbak', role: 'Project Manager', image: 'kagan', link: 'https://www.linkedin.com/in/deniz-mert-dilaverler-997b271b9' },];
    return (
        
        <div className='team-container'>
            <div className='team-background-container'>
                <img src={TeamBackground} alt="" className='team-background-img'/>
            </div>
            <div className='team-members-container' id='team'>
                <h1>Meet the Team</h1>
                <p>
                    Meet our team, Algoritma Arkadaşları
                </p>
                <div className='team-card-holder-col1'>
                    {teamMembers.slice(0, 3).map((member, index) => {
                        return (
                            <TeamCard key={index} name={member.name} role={member.role} image={member.image} link={member.link} />
                        );
                    })}
                </div>
                <div className='team-card-holder-col2'>
                    {teamMembers.slice(3, 5).map((member, index) => {
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