import React from 'react';
import { Link } from 'react-router';

/**
 * Affiche une liste de nomenclatures à partir d'un tableau de nom.
 * Ces noms servent à constituer le lien utilisé par le router.
 * ex : /nomenclature/naf
 */
const ListeNomenclatures = (props) =>
  <div>
    <ul>{
      props.liste.map((nom) =>
        <li key={nom}>
          <Link to={`/nomenclature/${nom.toLowerCase()}`}>
            {nom}
          </Link>
        </li>)
      }
    </ul>
  </div>;

ListeNomenclatures.propTypes = {
  liste: React.PropTypes.array,
};

export default ListeNomenclatures;
