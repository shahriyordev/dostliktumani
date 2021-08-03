import {Map, InfoWindow, Marker} from 'google-maps-react';
import { Component } from 'react';
import React  from 'react'; 
class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
       
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default MapContainer;