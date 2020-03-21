import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import mapStyle from "../constants/maps_styling";
import Geolocation from "react-native-geolocation-service";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 48.5216,
        longitude: 9.0576,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          key: 0,
          latlng:
            [48.518061,
              9.0526],
          title: "Tübingen",
          description: 'Warum bist du so hügelgig'
        }
      ],
      latitude: 0,
      longitude: 0,
      coordinates: [],
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  componentDidMount() {

  }

  render() {
    return (
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={this.state.region}>
        {this.state.markers.map((marker) => (
          <Marker
            coordinate={{ latitude: marker.latlng[0], longitude: marker.latlng[1] }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  }
});
