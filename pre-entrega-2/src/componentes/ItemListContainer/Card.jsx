import './card.css';

const Card = ({ producto }) => {

    return (

        <div className="card" key={producto.id}>
            <img src={producto.imagen} alt={producto.titulo} />
            <h2>{producto.titulo}</h2>
            <span>${producto.price}</span>
        </div>

    )
}

export default Card;