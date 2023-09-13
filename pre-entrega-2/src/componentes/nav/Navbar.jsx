import './Navbar.css'; 
import Brand from "./Brand";
import CartWiget from "./CartWiget";


function Navbar() {
  return (
    <header>

      <div className='containerBrand'>
        <Brand />

      </div>

      <nav className='containerItemList'>
    
      </nav>

      <div className='containerCart'>
        <CartWiget />


      </div>

    </header>
  );
}

export default Navbar;