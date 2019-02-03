import React from "react";
import { NavLink } from "react-router-dom";
import "./layout.css";
class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <img src="https://codetheweb.blog/assets/img/icon2.png" alt="logo" />
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
