import React from 'react';
import Welcome from './Welcome';
import Liste from './Liste';
import Chargement from './Chargement';

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
    // TODO query
    setTimeout(this.updateData.bind(this), 1000);
  }

  getContextualComponent() {
    let comp;
    if (this.state.data === null) {
      comp = <Chargement />;
    } else {
      comp = <Liste titre="Naf" contenu={this.state.data} />;
    }
    return comp;
  }

  updateData() {
    this.setState({
      data: ['niveau-1', 'niveau-2', 'niveau-3'],
    });
  }

  render() {
    return (
      <div>
        <Welcome titre="l e i f" soustitre="Navigateur de nomenclatures" />
        {this.getContextualComponent()}
      </div>
    );
  }
}
