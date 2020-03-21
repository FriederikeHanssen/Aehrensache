import React from 'react';
import {
  Layout, Input, Button
} from '@ui-kitten/components';
import DatePicker from 'react-native-datepicker';

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
      <DatePicker
        style={{ width: 200 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Bestätigen"
        cancelBtnText="Abbrechen"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => { this.setState({ end_date: date }); }}
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
