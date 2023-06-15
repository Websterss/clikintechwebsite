import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom/cjs/react-router-dom'; 
import TopBar from './component/TopBar/TopBar';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import FooterBottom from './component/FooterBottom/FooterBottom';
import AboutUs from './component/AboutUs/AboutUs';



function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Navbar />
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/AboutUs" component={AboutUs} />
      </Switch>
       <FooterBottom />
      </Router>
 
    </div>
  );
}

export default App;
