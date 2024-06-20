
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar';
import Home from './Home';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import Men from './Men';
import Women from './Women';
import Item from './Item';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='electronics' element={<Electronics></Electronics>}></Route>
      <Route path='jewelery' element={<Jewelery></Jewelery>}></Route>
      <Route path='men' element={<Men></Men>}></Route>
      <Route path='women' element={<Women></Women>}></Route>
      <Route path='item' element={<Item></Item>}></Route>
    </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
