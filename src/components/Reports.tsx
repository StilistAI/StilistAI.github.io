import React from 'react';
import '../styles/Reports.css'
import ReportsCard from './ReportsCard';

const Reports: React.FC = () => {
    const reports = [
        { name: 'Project Specifications Report', link: 'https://www.google.com', description: 'Coming soon!' },
        { name: 'Analysis and Requirements Report', link: 'https://www.google.com', description: 'Coming soon!' },];
    return (
        <div className='reports-container'>
            <h1 id='reports'>Reports</h1>
            <p>Follow our journey and progress with our project reports</p>
            <div className='reports-cards-container'>
                {reports.map((report, index) => (
                    <ReportsCard key={index} name={report.name} link={report.link} description={report.description} />
                ))}
            </div>

        </div>
    );
};

export default Reports;
