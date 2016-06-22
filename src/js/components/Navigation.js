import React from 'react';

const Navigation = (props) =>
  <div className="row">
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="/">{props.titre}</a>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Nomenclature</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Concepts</a>
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
