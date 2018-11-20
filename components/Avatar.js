import React from 'react';
import avatarImage from './assets/avatar.jpg';

class Avatar extends React.Component {
  render() {
    return (
      <div className="avatar-container">
        <div className="avatar-image"></div>
          <p className="welcome-text">"Welcome back, {this.props.username}!"</p>
      </div>

        );
  }
}

export default Avatar;