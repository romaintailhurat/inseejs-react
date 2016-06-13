import React from 'react';
import { Link } from 'react-router';

const Liste = (props) =>
  <div>
    <h1 className="titre">{props.titre.toUpperCase()}</h1>
    <ul>
    {
      props.contenu.map((item) =>
        <li key={item.code.value}>
          <Link to={`/nomenclature/naf/${item.code.value}`}>
            {item.label.value}
          </Link>
          <span className="label label-pill label-info"> [ {item.code.value} ]</span>
        </li>)
    }
    </ul>
  </div>;

Liste.propTypes = {
  titre: React.PropTypes.string,
  contenu: React.PropTypes.array,
};

export default Liste;
