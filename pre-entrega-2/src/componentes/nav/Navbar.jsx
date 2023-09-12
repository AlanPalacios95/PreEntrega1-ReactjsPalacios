import './Navbar.css'; 
import Brand from "./Brand";
import ItemListContainer from './itemListContainer';
import CartWiget from "./CartWiget";


function Navbar() {
  return (
    <header>

      <div className='containerBrand'>
        <Brand />

      </div>

      <nav className='containerItemList'>
        <ItemListContainer 
        itemUno = "Playstation"
        itemDos = "Xbox"
        itemTres = "Nintendo" />
    
      </nav>

      <div className='containerCart'>
        <CartWiget />


      </div>

    </header>
  );
}

export default Navbar;