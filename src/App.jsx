import './App.css';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages.jsx/Home';
import Recipe from './components/pages.jsx/Recipe';
import { useState } from 'react';



function App() {
  const [selectedItem, setSelectedItem] = useState()
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path='/' element={<Home setResipe={setSelectedItem}/>} />
          <Route path='/recipe' element={<Recipe selectedResipe={selectedItem}/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
