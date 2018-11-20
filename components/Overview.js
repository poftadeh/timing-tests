import React, { Fragment } from 'react';
import { PieChart } from 'react-easy-chart';
import { AreaChart } from 'react-easy-chart';

export default class Overview extends React.Component {
  render() {
    return (
      <Fragment>
        <h2 className="overview-title">Overview</h2>
        <div className="pie-row">

          <div className="pie-container">
            <PieChart
              size={275}
              innerHoleSize={200}
              data={[
                { key: 'A', value: 100, color: '#3498db' },
                { key: 'B', value: 200, color: '#ecf0f1' },
              ]}
            />
            <h3 className="pie-title">Returning vs New</h3>
          </div>

          <div className="pie-container">
            <PieChart
              size={275}
              innerHoleSize={200}
              data={[
                { key: 'C', value: 200, color: '#3498db' },
                { key: 'D', value: 50, color: '#ecf0f1' },
              ]}
            />
            <h3 className="pie-title">Profit</h3>
          </div>

          <div className="pie-container">
            <PieChart
              size={275}
              innerHoleSize={200}
              data={[
                { key: 'E', value: 20, color: '#3498db' },
                { key: 'F', value: 200, color: '#ecf0f1' },
              ]}
            />
            <h3 className="pie-title">Cost</h3>
          </div>
        </div>
        <div className="area-container">
          <AreaChart
            xType={'time'}
            axes
            xTicks={5}
            yTicks={3}
            dataPoints
            grid
            noAreaGradient
            tickTimeDisplayFormat={'%d %m'}
            interpolate={'cardinal'}
            areaColors={['#3498db', '#ecf0f1']}
            width={800}
            height={275}
            data={[
              [
                { x: '1-Jan-15', y: 20 },
                { x: '1-Feb-15', y: 10 },
                { x: '1-Mar-15', y: 33 },
                { x: '1-Apr-15', y: 45 },
                { x: '1-May-15', y: 15 }
              ], [
                { x: '1-Jan-15', y: 10 },
                { x: '1-Feb-15', y: 15 },
                { x: '1-Mar-15', y: 13 },
                { x: '1-Apr-15', y: 15 },
                { x: '1-May-15', y: 10 }
              ]
            ]}
          />
        </div>
      </Fragment>
    );
  }
}