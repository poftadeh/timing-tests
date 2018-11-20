import React from 'react';
import Search from './Search';
import Avatar from './Avatar';
import CalendarImage from './assets/calendar.svg';
import Calendar from 'react-calendar';
import Projections from './Projections';
import Account from './Account';
import OverviewMenu from './OverviewMenu';

export default class LeftMenu extends React.Component {
  render() {
    return (
      <div className="left-menu">
        <h1 className="title"><CalendarImage /> Mini CRM</h1>
        <Avatar
          username={this.props.username}
        />
        <OverviewMenu 
          setView={this.props.setView}
        />
        <Search
          setData={this.props.setData}
          setView={this.props.setView}
        />
        <Projections
          setView={this.props.setView}
        />
        <Account
          setLogin={this.props.setLogin}
        />
        <Calendar className="calendar"/>
      </div>
    );
  }
}
