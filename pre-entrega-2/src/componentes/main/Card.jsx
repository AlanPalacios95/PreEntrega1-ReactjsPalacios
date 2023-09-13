import './card.css'; 
import Counter from './Counter';

const Card = ({ title, info }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{info}</p>
      <Counter />
    </div>
  );
}

export default Card;