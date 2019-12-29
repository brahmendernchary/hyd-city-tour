import React from 'react';
import Navbar from './components/navbar/Navbar';
import TourList from './components/TourList';
import './App.scss';

function App() {
  return (
    <main>
      <Navbar/>
      <TourList />
    </main>
    
  );
}

export default App;
