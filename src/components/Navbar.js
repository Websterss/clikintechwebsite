import "./NavbarStyles.css";
import { Component } from "react";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html">Services</a>
              </li>
              <li>
                <a href="index.html">Career</a>
              </li>
              <li>
                <a href="index.html">About</a>
              </li>
              <li>
                <a href="index.html">Contact Us</a>
              </li>
              <li>
                <a href="index.html">Free Trial</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              classname={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
