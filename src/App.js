
import './App.css';
import Main from './components/Main';
import {Route,Routes} from 'react-router-dom'
import SingleProduct from './components/SingleProduct';
import { useSelector } from 'react-redux';
// import  FilteredProducts from './components/FilteredProducts'
import Login from './components/Login'
import { lazy } from 'react';
import { Suspense } from 'react';
import Loader from './components/Loader';


const FilteredProducts = lazy(()=>import("./components/FilteredProducts"))






function App() {
  const user = useSelector(state=>state.user.user)
  const {authUser} = user 
  
   
  
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={authUser?<Main/>:<Login/> }/>
          <Route path='/filterProduct/:type' element={
            <Suspense fallback={<Loader/>}>
              <FilteredProducts/>
            </Suspense>
        
          }/>
        <Route path='/filterProduct/:type/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
