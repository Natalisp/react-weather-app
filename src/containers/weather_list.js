import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
//
// renderWeather(cityData) {
//   return (
//     <tr>
//       <td>cityData.city.name</td>
//     </tr>
//   )
// }

  render() {
    return (
      <table className="table table-hover">
      <thead>
      <tr>
        <th>City</th>
        <th>Temp</th>
        <th>Pressure</th>
        <th>Humidity</th>
      </tr>
      </thead>
      <tbody>
        if(this.props.weather) {
          this.props.weather.map(function(data){
            return (
              <tr>
                <td>data.city.name</td>
              </tr>
            )
          }
        )
      }
      </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
