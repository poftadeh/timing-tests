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
  }

  handleChange(event) {
    console.log(event, event.target, event.target.value)
    this.setState({ name: event.target.value });
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log("in handlesubmit");
    if (!this.state.name) {
      service.getAllMembers()
        .then(members => {
          this.props.setData(members);
          console.log(members);
        })
        .catch(err => console.error(err));
    } else {
      service.getMember(this.state.name)
        .then(member => {
          this.props.setData(member);
          console.log(member.data);
        })
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-container">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          className="search-box"
          placeholder="Search Name"
        />
        <input
          type="submit"
          onClick={this.handleSubmit}
          value="Fetch"
        />
      </div>
    );
  }
}

export default Search;