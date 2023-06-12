import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom/cjs/react-router-dom'; 
import TopBar from './Components/TopBar/TopBar';
import Home from './Components/Home/Home';


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
