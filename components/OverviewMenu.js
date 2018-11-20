import React, {Fragment} from 'react';

export default class Projections extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
  }

  setView() {
    this.props.setView('overview');
  }

  render() {
    return (
      <Fragment>
        <h2 className="section-header">Overview</h2>
        <button 
          className="crm-button"
          onClick={this.setView}
        >
          Quick Stats
        </button>
      </Fragment>
    );
  }
}