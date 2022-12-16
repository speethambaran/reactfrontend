import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "90%",
  height: "550px",
};

export class MapContainer extends Component {
  constructor(props) {
    super();
  }
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 10.051969,
            lng: 76.315773,
          }}
        >
        {/* <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.props.latitude,
            lng: this.props.longitude,
          }}
        > */}
          {console.log('LATITDE__________',this.props.latitude)}
          <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: this.props.latitude, lng: this.props.longitude }}
        />
        <Marker />
        </Map>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAmYOzTZtjgez3XLym25huQB553-8_CGtk",
})(MapContainer);