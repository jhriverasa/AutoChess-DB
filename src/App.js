import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Pieces from './components/Pieces';

function App() {
  return (
      <div className="App">
        <NavigationBar/>
        <Pieces/>
        <Footer/>
      </div>
  );
}


export default App;
