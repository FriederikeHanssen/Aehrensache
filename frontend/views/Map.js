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
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          latlng:
            [37.7882
              - 122.4324],
          title: 'Testmarker',
          description: 'dude'
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
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}></MapView>

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
/*
<View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
          {this.state.markers.map((marker) => (
            <Marker
              coordinate={{ latitude: 37, longitude: -122 }}
              title={marker.title}
              description={marker.description}
            />
          ))}</MapView>

      </View>
<MapView
          style={styles.map}
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          region={this.state.region}
        >
          {this.state.markers.map((marker) => (
            <Marker
              coordinate={{ latitude: 37, longitude: -122 }}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
*/
