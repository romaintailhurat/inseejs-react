import React from 'react';
import { Link } from 'react-router';

const ListeNomenclatures = (props) =>
  <div>
    <ul>{
      props.liste.map((nom) =>
        <li key={nom}><Link to={`/nomenclature/${nom.toLowerCase()}`}>{nom}</Link></li>) }
    </ul>
  </div>;

ListeNomenclatures.propTypes = {
  liste: React.PropTypes.array,
};

export default ListeNomenclatures;
