import React from 'react';
import Search from './Search';
import Avatar from './Avatar';
import Calendar from './assets/calendar.svg'

export default class LeftMenu extends React.Component {
  render() {
    return (
      <div className="left-menu">
        <h1><Calendar /> Mini CRM</h1>
        <Avatar
          username={this.props.username}
        />
        <Search 
          setData={this.props.setData}
        />
      </div>
    );
  }
}
