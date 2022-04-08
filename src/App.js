import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
        <ItemDetailContainer />
        <ItemListContainer titulo={"Bienvenido a mi pagina tienda"} />
        
      </header>
      </>
  );
}

export default App;
