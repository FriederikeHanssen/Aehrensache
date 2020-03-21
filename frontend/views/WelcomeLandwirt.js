import React from 'react';
import {
  View, Button, TextInput
} from 'react-native';
import DatePicker from 'react-native-datepicker';

class WelcomeLandwirt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: new Date.prototype.getDate(),
      end_date: '2016-05-15',
      name: 'Der Doedel',
      plz: 72766
    };
  }

  onHandleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <View>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.start_date}
          mode="date"
          placeholder="select starting date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
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
          onDateChange={(date) => { this.setState({ start_date: date }); }}
        />
        <DatePicker
          style={{ width: 200 }}
          date={this.state.end_date}
          mode="date"
          placeholder="select ending date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
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
        <TextInput
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          onChangeText={(plz) => this.setState({ plz })}
          value={this.state.plz}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <Button onPress={() => this.onHandleSubmit()} title="Submit" />
      </View>
    );
  }
}

export default WelcomeLandwirt;
