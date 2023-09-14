import Card from "./Card";
import './card.css';

const ItemList = ({ productos }) => {
    return (
        <div >
            <h1 className="category__title">Productos</h1>
            <div className="itemlist__div">
            {productos.length > 0 &&
                productos.map((producto) => (
                    <Card key={producto.id} producto={producto} />
                ))
            }
            </div>
        </div>
    );
};

export default ItemList;