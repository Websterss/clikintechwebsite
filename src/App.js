import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom/cjs/react-router-dom'; 
import TopBar from './Components/TopBar/TopBar';


function App() {
  return (
    <div className="App">
      <Router>
      <TopBar />
      <Navbar />
      <Switch>

        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
