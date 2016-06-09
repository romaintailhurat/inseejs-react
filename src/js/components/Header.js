import React from 'react';

const Header = (props) =>
  <div className="jumbotron">
    <div className="container">
      <h1><a href="/">{props.titre}</a></h1>
      <h2>{props.soustitre}</h2>
    </div>
  </div>;

Header.propTypes = {
  titre: React.PropTypes.string,
  soustitre: React.PropTypes.string,
};

export default Header;
