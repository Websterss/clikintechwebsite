import './App.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom/cjs/react-router-dom'; 
import TopBar from './component/TopBar/TopBar';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import FooterBottom from './component/Footer/Footer';
import AboutUs from './component/AboutUs/AboutUs';
import Blog from './component/Blog/Blog';
import View from './component/Blog/View_blog';
import ContactUs from './component/ContactUs/ContactUsmain';
import Career from './component/Career/Career';
import Services from './component/Our_Service/Our_Service';
import BlogMangement from './component/BlogMangement/BlogMangement';
import Login from './component/Login/Login';
import Private from './component/Private';
import BlogPostForm from './component/BlogMangement/BlogPostForm';
import BlogEdit from './component/BlogMangement/BlogEdit';
import ForgotPassword from './component/forgotpassword/ForgotPassword';
import PasswordReset from './component/PasswordReset/PasswordReset';


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
         <Route exact path="/forgot-password" component={ForgotPassword} />
         <Route exact path="/password-reset/:id/:token"  component={PasswordReset} />
         <Route exact path="/Career" component={Career} />
         <Route exact path="/Services" component={Services} />
         <Route exact path="/Login" component={Login} />
         <Private exact path="/BlogMangement" component={BlogMangement} /> 
         <Private exact path="/BlogPost" component={BlogPostForm} /> 
         <Private exact path="/BlogEdit/:id" component={BlogEdit} /> 
         <Route exact path="/Blog/:id" component={View} /> 
      </Switch>
       <FooterBottom />
  </Router>
 
    </div>
  );
}

export default App;
