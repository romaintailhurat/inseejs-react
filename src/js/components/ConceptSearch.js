import React from 'react';
import Autocomplete from 'react-autocomplete';

const RENDER_TRESHOLD = 2;

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
  );
}

function sortConceptsTest(a, b, value) {
  return (
    b.label.value.toLowerCase().indexOf(value.toLowerCase()) >
    a.label.value.toLowerCase().indexOf(value.toLowerCase()) ? 1 : -1
  );
}

function shouldRenderTest(concept, value) {
  if (value.length < RENDER_TRESHOLD) {
    console.log('too short');
    return false;
  }
  return (
    concept.label.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

class ConceptSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      concepts: this.props.concepts.slice(0, 200),
    };
  }

  render() {
    return (
      <div>
        <p>Recherche de concepts</p>
        <Autocomplete
          value={this.state.value}
          items={this.state.concepts}
          inputProps={{ name: 'Concepts', id: 'concepts-autocomplete' }}
          getItemValue={(item) => item}
          onChange={(event, value) => this.setState({ value })}
          onSelect={value => this.setState({ value: value.label.value })}
          sortItems={sortConceptsTest}
          shouldItemRender={shouldRenderTest}
          renderItem={(item) =>
            <div key={item.concept.value}>
              {item.label.value}
            </div>
          }
        />
      </div>
    );
  }
}

ConceptSearch.propTypes = {
  concepts: React.PropTypes.array,
};

export default ConceptSearch;
