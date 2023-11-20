import './App.css';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages.jsx/Home';
import Recipe from './components/pages.jsx/Recipe';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
