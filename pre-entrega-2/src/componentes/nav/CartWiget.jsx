import { AiOutlineShoppingCart } from 'react-icons/ai';

const Carrito = () => {
    const juegos = 3;
    return (
        <div > 
        <AiOutlineShoppingCart className='cartwiget__img' />
            <span className='cartwiget__cantcart'>{juegos}</span>
        </div>
    );
};

export default Carrito;
