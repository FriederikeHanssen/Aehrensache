import React from 'react';
import {
  View, Button, TextInput
} from 'react-native';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker';

class WelcomeLandwirt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date_picker_value : "2016-05-15",
    };
  }

  render() {
    return (
      <View>
        <DatePicker
          style={{ width: 200 }}
          date={this.state.date_picker_value}
          mode="date"
          placeholder="select date"
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
            }}}
            // ... You can check the source to find the other keys.
            onDateChange={(date) => this.setState({ date_picker_value: date }})}
        />
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values));
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {formikProps => (
            <React.Fragment>
              <TextInput
                onChangeText={formikProps.handleChange('name')}
              />
              {formikProps.isSubmitting ? (
                <ActivityIndicator />
              ) : (
                <Button title="Submit" onPress={formikProps.handleSubmit} />
              )}
            </React.Fragment>
          )}
        </Formik>
      </View>

    );
  }
}

export default WelcomeLandwirt;
