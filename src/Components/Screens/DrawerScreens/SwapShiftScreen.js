import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Card, Button, CheckBox} from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
class SwapShiftScreen extends Component {
  state = {
    Shifts: [
      {
        isAMChecked: false,
        AMdisable: false,
      },
      {
        isPMCheckd: false,
        PMdisable: false,
      },
      {
        isNDChecked: false,
        NDdisable: false,
      },
    ]
 };

  CheckBoxDisbaledIcon() {
    return <Image source={require('../../../../assets/mountain.jpg')} />;
  }
 // this handles clickes on checkBoxes
 // changed their state from checked to unchecked, vice-virsa
 // index is position of the element in row, whereas checkboxToBeChecked is case value
 // which helps to determine which checkbox needs to be checked
  handleChange = checkboxToBeChecked => {
   let checked = {...this.state.Shifts};
   switch (checkboxToBeChecked) {
     case 'AM':
        checked[0].isAMChecked = !checked[0].isAMChecked;
        checked[1].PMdisable = !checked[1].PMdisable;
        checked[2].NDdisable = !checked[2].NDdisable;
        this.setState({checked});
        break;
     case 'PM':
       checked[1].isPMCheckd = !checked[1].isPMCheckd;
       checked[0].AMdisable = !checked[0].AMdisable;
       checked[2].NDdisable = !checked[2].NDdisable;
       this.setState({checked});
       break;
     case 'ND':
       checked[2].isNDChecked = !checked[2].isNDChecked;
       checked[0].AMdisable = !checked[0].AMdisable;
       checked[1].PMdisable = !checked[1].PMdisable;
       this.setState({checked});
       break;
     default:
       this.setState({checked});
       break;
   }
 };
 // this method Highlight selected date
  HighLightSelectedDate = ({dateString}) => {
    let date = {...this.state}; // copying the entire state
    date.selectedDate = dateString;// then updating selected state value with passed in date
    this.setState(date); // updating state now
  };

  render() {
    let newState = {...this.state.Shifts};
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
        <Card containerStyle={styles.checkBoxCardStyle}>
          <Text style={styles.TextTagStyle}>
            Please Select Your Shift below
          </Text>
          <View style={styles.checkboxViewTagStyle}>
            <CheckBox
              containerStyle={styles.checkBoxStyle}
              disabled={newState[0].AMdisable}
              title="AM"
              iconRight
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => {
                this.handleChange('AM');
              }}
              checked={newState[0].isAMChecked}
            />
            <CheckBox
              containerStyle={styles.checkBoxStyle}
              disabled={newState[1].PMdisable}
              title="PM"
              iconRight
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => {
                this.handleChange('PM');
              }}
              checked={newState[1].isPMCheckd}
            />
            <CheckBox
              containerStyle={styles.checkBoxStyle}
              disabled={newState[2].NDdisable}
              title="ND"
              iconRight
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              onPress={() => {
                this.handleChange('ND');
              }}
              checked={newState[2].isNDChecked}
            />
          </View>
        </Card>
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
    marginBottom: 10,
    marginTop: 10,
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
  checkBoxStyle: {
    width: 76,
    height:45,
    marginLeft: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
    position: 'relative',
  },
  checkBoxCardStyle:{
    marginTop:10,
    marginBottom:10,
    width: '95%',
    borderColor: 'black',
  },
  checkboxViewTagStyle:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
});
export default SwapShiftScreen;
