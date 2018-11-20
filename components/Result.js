import React from 'react';
import Chart from './Chart';
import Table from './Table';
import Overview from './Overview';

class Result extends React.Component {
  componentDidUpdate() {
    console.log('props in result:', this.props.data)
  }

  format() {
    if (this.props.view === "projections") {
      return <Chart />;
    } else if (this.props.view === "table") {
      return <Table data={this.props.data} />;
    } else if (this.props.view === "overview") {
      return <Overview />;
    } else {
      return <p>No data selected.</p>
    }
  }

  render() {
    return (
      <div className="result-container">
        {this.format()}
      </div>
    );
  }
}

export default Result;