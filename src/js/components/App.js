import React from 'react';
import Welcome from './Welcome';
import Liste from './Liste';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    // query
    setTimeout(this.updateData.bind(this), 1000);
  }

  updateData() {
    this.setState({ data: [1, 2, 3] });
  }

  render() {
    let comp;
    if (this.state.data === null) {
      comp = <div>loading...</div>;
    } else {
      comp = <Liste titre="Naf" contenu={this.state.data} />;
    }
    return (
      <div>
        <Welcome titre="l e i f" soustitre="Navigateur de nomenclatures" />
        {comp}
      </div>
    );
  }
}
