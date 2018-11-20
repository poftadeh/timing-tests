import React, {Fragment} from 'react';
import image from './assets/chart.png';

export default class Chart extends React.Component {
  render() {
    return (
      <div className="chart-container">
        <img src={image} alt="chart" className="chart"/>
      </div>
    );
  }
}