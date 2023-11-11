
import './App.css';
import FilteredProducts from './components/FilteredProducts';
import Main from './components/Main';
import {Route,Routes} from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {

   
  
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/filterProduct/:type' element={<FilteredProducts/>}/>
        <Route path='/filterProduct/:type/:id' element={<SingleProduct/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
