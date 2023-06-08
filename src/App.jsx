import React from 'react';
import './App.css';
import './components/Welcome'
import Welcome from './components/Welcome';
import Welcome2 from './components/Welcome2';
import Footer from './components/Footer';
import Contact_us from './component2/Contact_us';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Welcome2 />
      <Contact_us />

      <Footer />
    </div>
  );
}
export default App;
