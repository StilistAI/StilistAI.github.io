import "../styles/ReportsCard.css";
import analysis from "../assets/analysis.pdf";
import specification from "../assets/specification.pdf";

type ReportsCardProps = {
    name: string;
    description: string;
    id: string;
};
const ReportsCard = ({name, description, id}: ReportsCardProps) => {
    return (
        <div className='reports-card-container'>
            <h1>{name}</h1>
            <p>{description}</p>
            <a className='reports-button' download={`${name}.pdf`} href={id==="analysis" ? analysis : specification}>
                Download
            </a>
        </div>
    );
};

export default ReportsCard;
