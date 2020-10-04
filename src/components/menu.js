import React from "react";
import "./menu.css";
import { Link } from "gatsby";

export default (props) => {
  const { title } = props;

  return (
    <header>
      <h3 className="nav-brand"><Link to={`/`}>{title}</Link></h3>
      <ul>
        <li className="nav-item"><Link to={`/`}>Home</Link></li>
        <li className="nav-item"><Link to={`/contact/`}>Contact</Link></li>
        <li className="nav-item"><Link to={`/introduce/`}>Introduce</Link></li>
      </ul>
    </header>
  )
}