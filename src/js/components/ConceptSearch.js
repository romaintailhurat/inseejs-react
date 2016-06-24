import React from 'react';
import Autocomplete from 'react-autocomplete';

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
          items={['TVA', 'Chômage', 'Taxe', 'Croissance', 'PIB', 'Prix', 'Age', 'Ménage']}
          getItemValue={(item) => item}
          onChange={(event, value) => this.setState({ value })}
          onSelect={value => this.setState({ value })}
          renderItem={(item) => <div>{item}</div>}
        />
      </div>
    );
  }
}

export default ConceptSearch;
