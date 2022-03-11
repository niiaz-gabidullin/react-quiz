import React, { Component } from "react";
import classes from "./Drawer.module.css";
import Backdrop from "../../UI/Button/Backdrop/Backdrop";

export default class Drawer extends Component {
  renderLinks() {
    const links = [1, 2, 3];
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link{link}</a>
        </li>
      );
    });
  }
  render() {
    const cls = [classes.Drawer];
    if (!this.props.isOpen) {
      cls.push(classes.close);
    }
    return (
      <React.Fragment>
        <nav className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
       {this.props.isOpen? <Backdrop onClick={this.props.onClose}/>: null } 
      </React.Fragment>
    );
  }
}
