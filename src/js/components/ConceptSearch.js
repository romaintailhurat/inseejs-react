import React from 'react';
import Autocomplete from 'react-autocomplete';

const CONCEPTS =
  [
    'Age',
    'Chômage',
    'Croissance',
    'Ménage',
    'PIB',
    'Prix',
    'Taxe',
    'TVA'];

function sortConcepts(a, b, value) {
  return (
    b.toLowerCase().indexOf(value.toLowerCase()) >
    a.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
  );
}

function shouldRender(concept, value) {
  return (
    concept.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

class ConceptSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div>
        <p>Recherche de concepts</p>
        <Autocomplete
          value={this.state.value}
          items={CONCEPTS}
          inputProps={{ name: 'Concepts', id: 'concepts-autocomplete' }}
          getItemValue={(item) => item}
          onChange={(event, value) => this.setState({ value })}
          onSelect={value => this.setState({ value })}
          sortItems={sortConcepts}
          shouldItemRender={shouldRender}
          renderItem={(item) =>
            <div key={item}>
              {item}
            </div>
          }
        />
      </div>
    );
  }
}

export default ConceptSearch;
