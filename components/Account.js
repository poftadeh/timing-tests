import React, {Fragment} from 'react';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.setLogin(false);
  }

  render() {
    return(
      <Fragment>
        <h2 className="section-header">Account</h2>
        <button 
          className="crm-button"
          onClick={this.logOut}
        >
          Log Out
        </button>
      </Fragment>
    );
  }
}