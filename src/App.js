import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddProduct from './component/AddProduct';
import ShowProduct from './component/ShowProduct'; 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<ShowProduct/>}/>
          <Route path='/add' element={<AddProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
