import React from 'react';
import { Layout, Button, Text } from '@ui-kitten/components';

const WelcomeScreen = ({ navigation }) => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1" sytle={{ margin: 25 }}>Wer bist du?</Text>
    <Button
      onPress={() => navigation.navigate('Landwirt', { name: 'Jane' })}
      size="giant"
    >
      Landwirt
    </Button>
    <Button
      title="Helfer"
      onPress={() => navigation.navigate('Map', { name: 'lulz' })}
      style={{ margin: 24 }}
      size="giant"
    >
      Helfer
    </Button>
  </Layout>
);

export default WelcomeScreen;
