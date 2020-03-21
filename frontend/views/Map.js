import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import mapStyle from "../constants/maps_styling";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

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
      own_location_marker: {
        key: 0,
        latlng:
          [48.518061,
            9.0526],
        title: "Dein Standort",
        description: 'Hier stehst du :)'
      },
      markers: [
        {
          key: 1,
          latlng:
            [48.518061,
              9.0526],
          title: "Tübingen",
          description: 'Warum bist du so hügelig'
        },
      ]
    };
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      alert("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      own_location_marker: {
        key: 0,
        latlng:
          [location.coords.latitude,
          location.coords.longitude],
        title: "Dein Standort",
        description: 'Hier stehst du :)'
      }
    });
  };


  onRegionChange(region) {
    this.setState({ region });
  }


  render() {


    return (
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={this.state.region}>
        <Marker
          key={this.state.own_location_marker.key}
          coordinate={{
            latitude: this.state.own_location_marker.latlng[0],
            longitude: this.state.own_location_marker.latlng[1]
          }}
          title={this.state.own_location_marker.title}
          description={this.state.own_location_marker.description}
        />
        {this.state.markers.map((marker) => (
          <Marker
            key={marker.key}
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
/*




*/
