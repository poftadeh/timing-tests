import React, {Fragment} from 'react';

export default class Projections extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
  }

  setView() {
    this.props.setView('projections');
  }

  render() {
    return (
      <Fragment>
        <h2 className="section-header">Projections</h2>
        <button 
          className="crm-button"
          id="projections"
          onClick={this.setView}
        >
          View
        </button>
      </Fragment>
    );
  }
}