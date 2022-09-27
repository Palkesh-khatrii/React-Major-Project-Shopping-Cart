import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header'
import Home from './Components/Home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/cart' exact element={<Cart/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
