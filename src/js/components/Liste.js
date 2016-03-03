import React from 'react';

export default class Liste extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.titre}</h1>
        <ul>
        {
          this.props.contenu.map((item, i) => <li key={i}>{item} - {i}</li>)
        }
        </ul>
      </div>
    );
  }
}

Liste.propTypes = {
  titre: React.PropTypes.string,
  contenu: React.PropTypes.array,
};
