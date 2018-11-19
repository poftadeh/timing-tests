import React from 'react';
import ReactDOM from 'react-dom';
import '../public/main.css';
import Result from './Result'
import LeftMenu from './LeftMenu';
import Service from './Service';
import Login from './Login';
const service = new Service();

class OSTEPCRM extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      hasLoggedIn: false,
      username: "User",
    }

    this.setData = this.setData.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.getAllMembers = this.getAllMembers.bind(this);
    this.setLogin = this.setLogin.bind(this);
  }

  componentDidMount() {
    this.getAllMembers()
  }

  getAllMembers() {
    service.getAllMembers().then(members =>
      this.setState({ data: members })
    );
  }

  setData(data) {
    this.setState({ data });
  }

  setLogin(bool) {
    this.setState({ hasLoggedIn: bool });
  }

  setUsername(username) {
    this.setState({username});
  }

  render() {
    return (
      <div className="main-content">
        {this.state.hasLoggedIn &&
          <div className="crm-window">
            <LeftMenu
              setData={this.setData}
              username={this.state.username}
            />
            <div className="results-box">
              <Result
                data={this.state.data}
              />
            </div>
          </div>
        }
        {!this.state.hasLoggedIn &&
          <Login
            setLogin={this.setLogin}
            setUsername={this.setUsername}
          />
        }
      </div>
    );
  }
}

ReactDOM.render(<OSTEPCRM />, document.getElementById('app'));
