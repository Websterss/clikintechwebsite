import React from 'react';
import './App.css';
import './components/Welcome'
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Welcome/>
    <Welcome2/>
    <Footer/>
    </div>
  );
}
export default App;
