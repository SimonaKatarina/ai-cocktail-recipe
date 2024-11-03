import CustomNavbar from './components/CustomNavbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Recipes from "./Recipes";
import Generator from "./Generator";
import './App.css';

function App(){
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/generator' element={<Generator />} />
      </Routes>
    </Router>
  );
}

export default App;
