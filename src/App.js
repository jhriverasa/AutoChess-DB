import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Pieces from './components/Views/Heroes/Pieces';


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
