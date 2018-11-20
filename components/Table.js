import React, {Fragment} from 'react';

export default class Table extends React.Component {
  render() {
    return(
      <Fragment>
      <div className="result-table">
          <div className="grid-item grid-header">#</div>
          <div className="grid-item grid-header">First</div>
          <div className="grid-item grid-header">Last</div>
          <div className="grid-item grid-header">Email</div>
          {this.props.data.map((member, i) => (
            <React.Fragment key={member._id}>
              <div className="grid-item">{i + 1}</div>
              <div className="grid-item">{member.firstName}</div>
              <div className="grid-item">{member.lastName}</div>
              <div className="grid-item">{member.email}</div>
            </React.Fragment>
          ))}
      </div>

      </Fragment>
    );
  }
}