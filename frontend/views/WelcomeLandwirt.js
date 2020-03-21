import React from 'react';
import { Layout, Input, Button, Datepicker } from '@ui-kitten/components';

class WelcomeLandwirt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: new Date(),
      end_date: null,
      name: null,
      plz: null
    };
  }

  onHandleSubmit = () => {
    console.log(this.state);
  }

  render = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Datepicker
        date={this.state.start_date}
        onSelect={(date) => this.setState({ start_date: date })}
      />
      <Input
        onChangeText={(name) => this.setState({ name })}
        value={this.state.name}
        placeholder="Name"
      />
      <Input
        onChangeText={(plz) => this.setState({ plz })}
        value={this.state.plz}
        placeholder="Plz"
      />
      <Button onPress={() => this.onHandleSubmit()}>Einreichen</Button>
    </Layout>
  )
}

export default WelcomeLandwirt;
