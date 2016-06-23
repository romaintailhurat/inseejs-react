import React from 'react';
import ListeNomenclatures from './ListeNomenclatures';
import { NOMENCLATURES } from '../actions/actions';

const NomenclatureView = (props) =>
  <div className="col-md-12">
    <div className="row">
      <ListeNomenclatures liste={Object.keys(NOMENCLATURES)} />
      {props.children}
    </div>
  </div>;

NomenclatureView.propTypes = {
  children: React.PropTypes.object,
};

export default NomenclatureView;
