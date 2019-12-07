import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
class SwapShiftScreen extends Component {
  state = {
    Shift: [{AM: 'AM'}, {PM: 'PM'}, {ND: 'ND'}],
    selectedShift:'Please Select Your Shift ',
    selectedDate: '',
 };

 // this method Highlight selected date
  HighLightSelectedDate = ({dateString}) => {
    let date = {...this.state}; // copying the entire state
    date.selectedDate = dateString;// then updating selected state value with passed in date
    this.setState(date); // updating state now
  }
  SelectValueFromPicker = itemValue => {
    let value = this.state.selectedShift;
  };

  render() {
    const mark = {
      [this.state.selectedDate]: {
        selected: true,
        marked: true,
        selectedColor: 'blue',
      },
    };
    return (
      <View style={styles.ViewTagStyle}>
        <Text>Swap shift Screen</Text>
        <Card containerStyle={styles.CardStyle}>
          <Calendar
            markedDates={mark}
            onDayPress={day => {
              this.HighLightSelectedDate(day);
            }}
          />
        </Card>
        <View style={styles.itemSeperator} />
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.state.selectedShift}
          onValueChange={(itemValue, itemIndex) =>
            this.SelectValueFromPicker(itemValue, itemIndex)
          }>
          <Picker.Item
            label={this.state.Shift[0].AM}
            value={this.state.Shift[0].AM}
          />
          <Picker.Item
            label={this.state.Shift[1].PM}
            value={this.state.Shift[2].PM}
          />
          <Picker.Item
            label={this.state.Shift[2].ND}
            value={this.state.Shift[2].ND}
          />
        </Picker>
        <View style={styles.itemSeperator} />
        <Button containerStyle={styles.buttonStyle} title="Search" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, alignItems: 'center'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
  CardStyle: {
    borderColor: 'black',
    marginLeft: 5,
    width: '95%',
    marginRight: 5,
  },
  pickerStyle:{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    borderColor:'transparent',
    borderWidth:1,
    position: 'relative',
    width: '95%',
  },
  buttonStyle:{
    width: '95%',
  },
  itemSeperator:{
    height:1,
    width:'95%',
    backgroundColor: 'black',
    marginLeft: 3,
    marginRight:4,
    marginTop:10,
    marginBottom:10,
    borderColor: 'red'
  },
});
export default SwapShiftScreen;

// '2019-12-08': {
//   selected: true,
//   marked: true,
//   selectedColor: 'blue',
//   activeOpacity: 1,
// },
