type ReportsCardProps = {
    name: string;
    link: string;
    description: string;
};
const ReportsCard = ( {name, description}: ReportsCardProps) => {
    return (
        <div className='reports-card-container'>
            <h1>{name}</h1>
            <p>{description}</p>
            <button className='reports-button' disabled>Download</button>
        </div>
    );
};

export default ReportsCard;