import './Navbar.css';

const ItemListContainer = (props) => {
  const handleClick = (item) => {
    console.log(`Clic en ${item}`);
  };

  return (
    <ul className="itemlistcontainer__ul">
      <li className='itemlistcontainer__li'>
        <a href="#" onClick={() => handleClick(props.itemUno)}>
          {props.itemUno}
        </a>
      </li>
      <li className='itemlistcontainer__li'>
        <a href="#" onClick={() => handleClick(props.itemDos)}>
          {props.itemDos}
        </a>
      </li>
      <li className='itemlistcontainer__li'>
        <a href="#" onClick={() => handleClick(props.itemTres)}>
          {props.itemTres}
        </a>
      </li>
    </ul>
  );
};

export default ItemListContainer;
