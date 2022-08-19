import ActionButton from '../../../../../shared/components/ActionButton/ActionButton';
import './info-card.css';
import {Link} from 'react-router-dom';


function InfoCard({ disease }) {

    return (
        <div className='card'> 
            {/* <Link to={'/questions/' + disease.id}>   */}
            <div className="header">
                <h2>{disease.name}</h2>
            </div>

            <div className="line"></div>

            <div className="content">{disease.description}</div>
            {/* </Link> */}
            <div className="actions">
                <ActionButton text="View" path="/edit" state={disease} size="sm" type="warn" />
                <ActionButton text="Questions" path="/questions" state={disease} size="sm" type="success" />
                <ActionButton text="Excluir" path="/delete" size="sm" type="danger" />
            </div>
        </div>
    );
}

export default InfoCard;