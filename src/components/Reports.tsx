import React from 'react';
import '../styles/Reports.css'
import ReportsCard from './ReportsCard';

const Reports: React.FC = () => {
    const reports = [
        {name: 'Project Specifications Report', description: 'Coming soon!', id: "specification"},
        {name: 'Analysis and Requirements Report', description: 'Coming soon!', id: "analysis"},];
    return (
        <div className='reports-container'>
            <h1 id='reports'>Reports</h1>
            <p>Follow our journey and progress with our project reports</p>
            <div className='reports-cards-container'>
                {reports.map((report, index) => (
                    <ReportsCard key={index} name={report.name} description={report.description} id={report.id}/>
                ))}
            </div>

        </div>
    );
};

export default Reports;
