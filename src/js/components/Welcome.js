import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titre}</h1>
        <h2>{this.props.soustitre}</h2>
      </div>
    );
  }
}

Welcome.propTypes = {
  titre: React.PropTypes.string,
  soustitre: React.PropTypes.string,
};
