import React from 'react';
import ConceptSearch from './ConceptSearch';
import { listStore } from '../stores/stores';


// const Concept = () =>
//   <div className="col-md-12">
//     <div className="row">
//       <ConceptSearch />
//       ConceptInfo
//     </div>
//   </div>;

class Concept extends React.Component {
  constructor(props) {
    super(props);
    this.state = { concepts: listStore.getState().concepts };
  }

  componentWillMount() {
    listStore.subscribe(() => {
      this.setState({ concepts: listStore.getState().concepts });
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <ConceptSearch concepts={this.state.concepts} />
          {`${this.state.concepts.length} concepts in store`}
        </div>
      </div>
  );
  }
}

export default Concept;
