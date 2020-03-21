import React from 'react';
import { Marker, PROVIDER_GOOGLE } from MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import mapsStyle from '../maps_styling.json';



export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.props.mapsStyle = mapsStyle;
    this.setState({
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
      ]
    });
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>

        <MapView
          style={styles.map}
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
      </View>
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
    top: -10,
    left: 0,
    right: 0,
    bottom: 0,
  }
});
const mapStyle = [
  { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
  { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
];
