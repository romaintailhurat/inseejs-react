import React from 'react';
import { Link } from 'react-router';
import Version from './Version';

const Footer = (props) =>
  <footer id="footer" className="footer">
    <Link to="/credits">Credits</Link>
    <span> / </span>
    <Version version={props.version} />
  </footer>;

Footer.propTypes = {
  version: React.PropTypes.string,
};

export default Footer;
