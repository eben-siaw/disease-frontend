import ActionButton from '../../../../../shared/components/ActionButton/ActionButton';
import './info-card.css';


function InfoCard({ disease }) {

    return (
        <div className='card'>
            <div className="header">
                <h2>{disease.name}</h2>
            </div>

            <div className="line"></div>

            <div className="content">{disease.description}</div>

            <div className="actions">
                <ActionButton text="Editar" path="/edit" state={disease} size="sm" type="warn" />
                <ActionButton text="Sintomas" path="/symptoms" state={disease} size="sm" type="success" />
                <ActionButton text="Excluir" path="/delete" size="sm" type="danger" />
            </div>
        </div>
    )
}

export default InfoCard;