
import './App.css';
import FilteredProducts from './components/FilteredProducts';
import Main from './components/Main';
import {Route,Routes} from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';



function App() {
  const user = useSelector(state=>state.user.user)
  const {authUser} = user 
  
   
  
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={authUser?<Main/>:<Login/> }/>
        <Route path='/filterProduct/:type' element={<FilteredProducts/>}/>
        <Route path='/filterProduct/:type/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
