
import './App.css';
import FilteredProducts from './components/FilteredProducts';
import Main from './components/Main';
import {Route,Routes} from 'react-router-dom'
import SingleProduct from './components/SingleProduct';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/filterProduct/:type' element={<FilteredProducts/>}/>
        <Route path='/filterProduct/:type/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
