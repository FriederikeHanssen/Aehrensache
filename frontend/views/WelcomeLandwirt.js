import React from 'react';
import {
  RangeCalendar, Layout, Input, Button
} from '@ui-kitten/components';

class WelcomeLandwirt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      range: {
        startDate: null,
        endDate: null,
      },
      name: 'Der Doedel',
      plz: 72766
    };
  }

  onHandleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <Layout>
        <RangeCalendar
          range={this.state.range}
          onSelect={(range) => this.setState(range)}
        />
        <Input
          placeholder="Place your Text"
          value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
        />
        <Input
          placeholder="Place your Text"
          value={this.state.name}
          onChangeText={(plz) => this.setState({ plz })}
        />
        <Button onPress={() => this.onHandleSubmit()} title="Submit" />
      </Layout>
    );
  }
}

export default WelcomeLandwirt;
