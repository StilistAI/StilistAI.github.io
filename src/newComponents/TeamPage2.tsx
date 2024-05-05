import '../newStyles/TeamPage.css';
import TeamCard from "./TeamCard.tsx";

function TeamPage2() {
    const teamMembers = [
        { name: 'Ali Emir Güzey', role: 'Backend & Infrastructure', image: 'aliemir', linkedin: 'https://www.linkedin.com/in/ali-guzey', github: 'https://github.com/guezey' },
        { name: 'Alp Afyonluoğlu', role: 'Machine Learning & Backend', image: 'alp', linkedin: 'https://www.linkedin.com/in/alpafyonluoglu', github: 'https://https://github.com/alpafyonluoglu.com/guezey'  },
        { name: 'Ceren Akyar', role: 'UI/UX Design & Frontend', image: 'ceren', linkedin: 'https://www.linkedin.com/in/ceren-akyar-a477911b7', github: 'https://github.com/CerenAkyr'  },
        { name: 'Deniz Mert Dilaverler', role: 'Full Stack Development', image: 'deniz', linkedin: 'https://www.linkedin.com/in/deniz-mert-dilaverler-997b271b9', github: 'https://github.com/deniz-dilaverler'  },
        { name: 'Mehmet Kağan İlbak', role: 'Machine Learning & Infrastructure', image: 'kagan', linkedin: 'https://www.linkedin.com/in/kaganilbak', github: 'https://github.com/kagani'  },];

    const advisors = [
        { name: 'Hamdi Dibeklioğlu', role: 'Supervisor', image: 'hamdi', linkedin: 'https://www.linkedin.com/in/dibeklioglu/'},
        { name: 'Dr. Ahmet Kara', role: 'Innovation Expert', image: 'ahmet', linkedin: 'https://www.linkedin.com/in/ahmetk/'}, ];
    return (
        <div className="teamPageContainer2">
            <div className="teamPageColumn1">
                {teamMembers.slice(0, 3).map((member, index) => {
                    return (
                        <TeamCard key={index} name={member.name} role={member.role} image={member.image} linkedin={member.linkedin} github={member.github} />
                    );
                })}
            </div>
            <div className="teamPageColumn2">
                {teamMembers.slice(3, 5).map((member, index) => {
                    return (
                        <TeamCard key={index} name={member.name} role={member.role} image={member.image} linkedin={member.linkedin} github={member.github} />
                    );
                })}
            </div>

            <h1>Our Advisors</h1>

            <div className='teamPageColumn2'>
                {advisors.map((member, index) => {
                    return (
                        <TeamCard key={index} name={member.name} role={member.role} image={member.image} linkedin={member.linkedin} github="" />
                    );
                })}
            </div>
        </div>
    );
}

export default TeamPage2;
