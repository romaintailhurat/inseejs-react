import React from 'react';

const Header = (props) =>
  <div>
    <h1>{props.titre}</h1>
    <h2>{props.soustitre}</h2>
  </div>;

Header.propTypes = {
  titre: React.PropTypes.string,
  soustitre: React.PropTypes.string,
};

export default Header;
