import HeaderImg from "./componentes/home/HeatherImg";
import Card from "./componentes/main/Card";
import Navbar from "./componentes/nav/Navbar";
import './componentes/nav/Navbar.css';
import ItemListContainer from '../src/componentes/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Los mejores juegos al mejor precio"} />
      <HeaderImg />
      <Card title="Título de ejemplo" info="Aquí va alguna información" />
    </>
  )
}

export default App
