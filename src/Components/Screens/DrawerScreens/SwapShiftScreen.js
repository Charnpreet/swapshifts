import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Alert} from 'react-native';
import {Card, Button, CheckBox} from 'react-native-elements';
import {Calendar} from 'react-native-calendars';
import {SearchingForEmployees} from '../../../Actions/UserActions';
import firebase from 'firebase';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
class SwapShiftScreen extends Component {
  state = {
    Shifts: [
      {
        isAMChecked: false,
      },
      {
        isPMCheckd: false,
      },
      {
        isNDChecked: false,
      },
    ],
    choosenDate: null,
    selectedShift: null,
    months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
 };
  getMonthFromDate(index){
    if (index != null) {
      return this.state.months[index];
    }
    return null;
  }
 // this handles clickes on checkBoxes
 // changed their state from checked to unchecked, vice-virsa
 // index is position of the element in row, whereas checkboxToBeChecked is case value
 // which helps to determine which checkbox needs to be checked
  handleChange = checkboxToBeChecked => {
   let newState = {...this.state};
   switch (checkboxToBeChecked) {
     case 'AM':
        newState.Shifts[0].isAMChecked = !newState.Shifts[0].isAMChecked;
        if (newState.Shifts[0].isAMChecked){
          newState.selectedShift = checkboxToBeChecked;
        }
        this.setState(newState);
        break;
     case 'PM':
       newState.Shifts[1].isPMCheckd = !newState.Shifts[1].isPMCheckd;
        if (newState.Shifts[1].isPMCheckd) {
         newState.selectedShift = checkboxToBeChecked;
        }
       this.setState(newState);
       break;
     case 'ND':
       newState.Shifts[2].isNDChecked = !newState.Shifts[2].isNDChecked;
       if (newState.Shifts[2].isNDChecked) {
          newState.selectedShift = checkboxToBeChecked;
        }
       this.setState(newState);
       break;
     default:
       this.setState(newState);
       break;
   }
 };
 // this method Highlight selected date
  HighLightSelectedDate = passedDate => {
    let selectedday = passedDate.day.toString();
    let year = passedDate.year;
    let month = this.getMonthFromDate(passedDate.month - 1); // months are stored in an index b/w 0-11,
    var date = selectedday.concat('-', month, '-', year);
    let newstate = {...this.state}; // copying the entire state
    newstate.selectedDate = passedDate.dateString;// then updating selected state value with passed in date
    newstate.choosenDate = date;
    this.setState(newstate); // updating state now
  };
  // redners calander to the screen
  renderCalander() {
    const mark = {
      [this.state.selectedDate]: {
        selected: true,
        marked: true,
        selectedColor: 'blue',
      },
    };
    return (
      <Card containerStyle={styles.CardStyle}>
        <Calendar
          markedDates={mark}
          onDayPress={day => {
            this.HighLightSelectedDate(day);
          }}
        />
      </Card>
    )
  }
  // this returns correct checkbox which well be checked or unchecked
  selectingCorrectCheckedbox(index, title) {
    if (title === 'AM') {
      return !!this.state.Shifts[index].isAMChecked;
    }
    if (title === 'PM') {
      return !!this.state.Shifts[index].isPMCheckd;
    }
    if (title === 'ND') {
      return !!this.state.Shifts[index].isNDChecked;
    }
  }
  //
  // this is custom layout of checkbox,
  // passing params will be used to display titile and index will
  // be used to extract value from state
  checkboxLayout(index, title){
    return (
      <CheckBox
        containerStyle={styles.checkBoxStyle}
        title={title}
        iconRight
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={() => {
          this.handleChange(title);
        }}
        checked={this.selectingCorrectCheckedbox(index, title)} //
      />
    );
  }
  // rednering check boxes to screen
  renderCheckboxes(){
    return (
      <Card containerStyle={styles.checkBoxCardStyle}>
        <Text style={styles.TextTagStyle}>Please Select Your Shift below</Text>
        <View style={styles.checkboxViewTagStyle}>
          {this.checkboxLayout(0, 'AM')}
          {this.checkboxLayout(1, 'PM')}
          {this.checkboxLayout(2, 'ND')}
        </View>
      </Card>
    );
  }
  searchingEmployees = () => {
    const {currentUser} = firebase.auth();
    const navigate = this.props.navigation; // getting navigation object
    let newState = {...this.state};
    if (newState.selectedShift != null && newState.choosenDate != null) {
      this.props.SearchingForEmployees(
        newState.selectedShift,
        newState.choosenDate,
        currentUser.uid,
        navigate
      );
      this.resettingThePage(newState);
    } else {
      Alert.alert('make sure you have selected date and shift both');
    }
  };
  // this can be used to reset this entire page
  // once updated selected date and shift will be unchecked
  resettingThePage(newState){
    newState.selectedShift = null;
    newState.choosenDate = null;
    newState.selectedDate = null
    newState.Shifts[0].isAMChecked = false;
    newState.Shifts[1].isPMCheckd = false;
    newState.Shifts[2].isNDChecked = false;
    this.setState(newState);
  }
render() {
    return (
      <View style={styles.ViewTagStyle}>
        <Text>Swap shift Screen</Text>
        <ScrollView style={styles.scrollViewStyle}>
          {this.renderCalander()}
          <View style={styles.itemSeperator} />
          {this.renderCheckboxes()}
          <View style={styles.itemSeperator} />
          <Button
            containerStyle={styles.buttonStyle}
            title="Search"
            onPress={this.searchingEmployees}
          />
        </ScrollView>
        {
          <Spinner
            visible={this.props.loading}
            textContent={'searching...'}
            overlayColor="white"
            animation="fade"
          />
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
    marginTop:5,
    marginBottom: 5,
  },
  TextTagStyle: {fontWeight: 'bold', marginTop: 2},
  CardStyle: {
    borderColor: 'black',
    marginLeft: 9,
    width: '95%',
    marginRight: 1,
  },
  buttonStyle:{
    width: '95%',
    marginBottom: 10,
    marginTop: 1,
    marginLeft: 9,
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
    marginTop:2,
    marginBottom:2,
    width: '95%',
    borderColor: 'black',
    marginLeft:9,
  },
  checkboxViewTagStyle:{
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
  },
  scrollViewStyle: {
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    marginLeft: 5,
    marginRight:5,
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    loading: state.UserReducer.loading,
    navigate:state.UserReducer.navigate,
  };
};
export default connect(
  mapStateToProps,
  {SearchingForEmployees},
)(SwapShiftScreen);

//uncheckedIcon="times-circle"
//uncheckedColor="red"
