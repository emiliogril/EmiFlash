import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Outlet } from 'react-router';
import * as bootstrap from 'bootstrap';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
        <NavBar />
          <Outlet />
    </>

  );
};

export default App;
