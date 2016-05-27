import React from 'react';
import { loadSection } from '../actions/actions';

export default class Liste extends React.Component {

  handleClick(code) {
    loadSection(code);
  }

  render() {
    return (
      <div>
        <h1 className="titre">{this.props.titre}</h1>
        <ul>
        {
          this.props.contenu.map((item) =>
            <li key={item.code.value}>
              <a href="#" onClick={() => this.handleClick(item.code.value)}>
                {item.label.value}
              </a>
            </li>)
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
