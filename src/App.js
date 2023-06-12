import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom/cjs/react-router-dom'; 
import TopBar from './components/TopBar/TopBar';
import Home from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
      <TopBar />
      <Navbar />
      <Switch>
     <Route exact path="/"  component={Home}/>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
