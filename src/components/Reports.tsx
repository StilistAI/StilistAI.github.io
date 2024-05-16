import React from 'react';
import '../styles/Reports.css'
import ReportsCard from './ReportsCard';

const Reports: React.FC = () => {
    const reports = [
        {name: 'Project Specifications Report', description: 'Download to view!', id: "specification"},
        {name: 'Analysis and Requirements Report', description: 'Download to view!', id: "analysis"},
        {name: 'Detailed Design Report', description: 'Download to view!', id: "design"},
        {name: 'Final Report', description: 'Download to view!', id: "final"}
    ];
    const members = [
        { name: 'Ceren', link: 'https://docs.google.com/document/d/1zijwHyt-p3nc3uJbLLPQMeetxNT6oTEWvPZMdQt4OZo/edit?usp=sharing' },
        { name: 'Deniz', link: 'https://docs.google.com/document/d/1MvqxrUrUzTGOER6NLU6nJOSYaigz77fBWvIy_wzEh1c/edit?usp=sharing' },
        { name: 'Kağan', link: 'https://example.com/member3' },
        { name: 'Ali Emir', link: 'https://docs.google.com/document/d/19AJQ6RAoBXPEsjgs5TbSWzNBDCJEllSmMoHdspvmm2s/edit?usp=sharing' },
        { name: 'Alp', link: 'https://example.com/member5' },
    ];
    return (
        <div className='reports-container'>
            <h1 id='reports'>Reports</h1>
            <p>Follow our journey and progress with our project reports</p>
            <div className='reports-cards-container'>
                {reports.map((report, index) => (
                    <ReportsCard key={index} name={report.name} description={report.description} id={report.id}/>
                ))}
            </div>
            <h1 id='reports'>Logbooks</h1>
            <p>Please request permission to read each member's logbook</p>
            <div className="logbookDiv">
                {members.map((member) => (
                        <Member name={member.name} link={member.link} />
                ))}
            </div>
        </div>
    );
};

interface MemberProps {
    name: string;
    link: string;
}

const Member: React.FC<MemberProps> = ({ name, link }) => {
    return (
            <a className="logbookText"  href={link} target="_blank" rel="noopener noreferrer">
                {name}'s <br/>Logbook
            </a>
    );
};

export default Reports;


