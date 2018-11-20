import React from 'react';
import Service from './Service';
const service = new Service();

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  changeView() {
    this.props.setView('table');
  }

  handleKeyUp(e) {
    console.log(e.keyCode, e.target.value)
    if (e.keyCode === 13) this.handleSubmit();
  }

  handleChange(event) {
    this.changeView();
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    this.changeView();
    if (!this.state.name) {
      service.getAllMembers()
        .then(members => {
          this.props.setData(members);
        })
        .catch(err => console.error(err));
    } else {
      service.getMember(this.state.name)
        .then(member => {
          this.props.setData(member.data);
        })
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-container">
        <h2 className="section-header">Contacts</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          className="search-input"
          placeholder="Search Name"
          onClick={this.changeView}
          onKeyUp={this.handleKeyUp}
        />
        <input
          type="submit"
          className="search-input crm-button"
          onClick={this.handleSubmit}
          value="Find Contact"
        />
      </div>
    );
  }
}

export default Search;