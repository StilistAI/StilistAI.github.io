import "../styles/ReportsCard.css";
import analysis from "../assets/analysis.pdf";
import specification from "../assets/specification.pdf";
import design from "../assets/design.pdf"
import final from  "../assets/final.pdf"

function selectFile(key: string) {
  switch (key) {
    case 'analysis':
      return analysis;
    case 'specification':
      return specification;
    case 'design':
      return design;
    case 'final':
      return final;
    default:
        throw new Error(`Invalid key: ${key}`);
  }
}

type ReportsCardProps = {
    name: string;
    description: string;
    id: string;
};
const ReportsCard = ({name, description, id}: ReportsCardProps) => {
    const file = selectFile(id)   
    return (
        <div className='reports-card-container'>
            <h1>{name}</h1>
            <p>{description}</p>
            {id === 'final' && <br />}
            <a className='reports-button' download={`${name}.pdf`} href={file}>
                Download
            </a>
        </div>
    );
};

export default ReportsCard;
