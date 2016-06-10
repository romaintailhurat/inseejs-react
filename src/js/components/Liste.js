import React from 'react';
import { Link } from 'react-router';
import { loadSection } from '../actions/actions';

export default class Liste extends React.Component {

  handleClick(code) {
    loadSection(code);
  }

  render() {
    return (
      <div>
        <h1 className="titre">{this.props.titre.toUpperCase()}</h1>
        <ul>
        {
          this.props.contenu.map((item) =>
            <li key={item.code.value}>
              <Link to={`/nomenclature/naf/${item.code.value}`}>{item.label.value}</Link>
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
