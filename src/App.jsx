import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom/cjs/react-router-dom'; 
import TopBar from './component/TopBar/TopBar';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import FooterBottom from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';
import Blog from './component/Blog/Blog';
import ContactUs from './component/ContactUs/ContactUsmain';
import Career from './component/Career/Career';
import Services from './component/Our_Service/Our_Service';
import BlogMangement from './component/BlogMangement/BlogMangement';
import Login from './component/Login/Login';
import Private from './component/Private';


function App() {



  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/" component={TopBar} />
      </Switch>
        <Navbar />
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/AboutUs" component={AboutUs} />
         <Route exact path="/Blog" component={Blog} />
         <Route exact path="/ContactUs" component={ContactUs} />
         <Route exact path="/Career" component={Career} />
         <Route exact path="/Services" component={Services} />
         <Route exact path="/Login" component={Login} />
         <Private exact path="/BlogMangement" component={BlogMangement} /> 
      </Switch>
       <FooterBottom />
  </Router>
 
    </div>
  );
}

export default App;
