import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom/cjs/react-router-dom'; 
import TopBar from './component/TopBar.js/TopBar';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Career from './component/Career/Career';
import Blog from './component/Blog/Blog';
import AboutUs from './component/About Us/AboutUs';
import ContactUs from './component/Contact Us/ContactUs';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Navbar />
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/Service" component={Services} />
         <Route exact path="/Career" component={Career} />
         <Route exact path="/Blog" component={Blog} />
         <Route exact path="/About Us" component={AboutUs} />
         <Route exact path="/Contact Us" component={ContactUs} />
      </Switch>
      <Footer />
      </Router>
 
    </div>
  );
}

export default App;
