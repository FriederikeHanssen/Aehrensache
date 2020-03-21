import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text, Button } from 'react-native';
import mapStyle from "../constants/maps_styling";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 51.0598488,
        longitude: 10.3120124,
        latitudeDelta: 9.2922,
        longitudeDelta: 9.2421,
      },
      own_location_marker: {
        key: 0,
        latlng:
          [1000.518061,
            9.0526],
        title: "Dein Standort",
        description: 'Hier stehst du :)'
      },
      markers: []
    };
    //this._getLocationAsync();
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
    this.setOwnLocation([location.coords.latitude, location.coords.longitude]);
  };

  clearData() {
    this.setState({ markers: [] });
  }

  _getJobsAsync = async () => {
    //TODO replace with actual REST API endpoint
    fetch(`http://www.mocky.io/v2/5e7630e32f00009057985ff3`)
      .then(res => res.json())
      .then(json => this.setState({ markers: json["jobs"] }));
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  setOwnLocation(latlong) {
    this.setState({
      own_location_marker: {
        key: 0,
        latlng:
          [latlong[0],
          latlong[1]],
        title: "Dein Standort",
        description: 'Hier stehst du :)'
      },
      region: {
        latitude: latlong[0],
        longitude: latlong[1],
        latitudeDelta: 0.2922,
        longitudeDelta: 0.2421,
      }
    });
  }

  onPress(e) {
    var event = e.nativeEvent;
    this.setOwnLocation([event.coordinate.latitude, event.coordinate.longitude]);
  }


  render() {

    let markers = this.state.markers.map((marker) => (
      <Marker
        key={marker.jobid}
        coordinate={{ latitude: marker.latlng[0], longitude: marker.latlng[1] }}
        title={marker.title}
        description={marker.description}
      />
    ));
    return (
      <View style={{ flex: 1 }}>
        <MapView
          customMapStyle={mapStyle}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onLongPress={(e) => { this.onPress(e) }}
          initialRegion={this.state.region}
          region={this.state.region}>
          <Marker
            key={this.state.own_location_marker.key}
            coordinate={{
              latitude: this.state.own_location_marker.latlng[0],
              longitude: this.state.own_location_marker.latlng[1]
            }}
            title={this.state.own_location_marker.title}
            description={this.state.own_location_marker.description}
          />
          {markers || null}

        </MapView>
        <View
          style={{
            position: 'absolute',
            top: '95%',
            display: 'flex',
            alignSelf: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <Button title="Find jobs" onPress={() => {
            this._getJobsAsync();
          }} />
          <Button title="Locate myself" onPress={() => {
            this._getLocationAsync();
          }} />
        </View>
      </View >
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
        {
          key: 1,
          latlng:
            [48.518061,
              9.0526],
          title: "Tübingen",
          description: 'Warum bist du so hügelig'
        },
*/
