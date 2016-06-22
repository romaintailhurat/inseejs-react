import React from 'react';
import { Link } from 'react-router';

const Navigation = (props) =>
  <div className="row">
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">{props.titre}</a>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <Link to="/nomenclature" className="nav-link">Nomenclatures</Link>
        </li>
        <li className="nav-item">
          <Link to="/concept" className="nav-link">Concepts</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
    </nav>
  </div>;

Navigation.propTypes = {
  titre: React.PropTypes.string,
};

export default Navigation;
