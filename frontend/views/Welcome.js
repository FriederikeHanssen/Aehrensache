import React from 'react';
import { Button, Text, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text h1>Wer bist du?</Text>
    <Button
      title="Landwirt"
      onPress={() => navigation.navigate('Landwirt', { name: 'Jane' })}
    />
    <Button
      title="Helfer"
      onPress={() => navigation.navigate('Map', { name: 'lulz' })}
    />
  </View>
);

export default WelcomeScreen;
