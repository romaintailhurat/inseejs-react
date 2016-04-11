import React from 'react';

export default class Liste extends React.Component {
  render() {
    return (
      <div>
        <h1 className="titre">{this.props.titre}</h1>
        <ul>
        {
          this.props.contenu.map((item) => <li key={item.code.value}>{item.label.value}</li>)
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
