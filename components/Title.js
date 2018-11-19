import React from 'react';

class Title extends React.Component {
  render() {
    return(
      <div className="title-bar">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Title;