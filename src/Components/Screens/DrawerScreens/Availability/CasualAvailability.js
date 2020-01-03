import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CheckBox, Card} from 'react-native-elements';
import firebase from 'firebase';
import {
  updateTempAvailability,
  fetechTempAvailability,
} from '../../../../Actions/UserActions';
import {connect} from 'react-redux';
class CasualAvailability extends Component {
  state = {
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
    weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };
  componentDidMount(){
    const currentMonth = this.state.months[new Date().getMonth()];
    var todaysDate = this.extractDateAsAStringFromDateNTime(new Date());
    const year = new Date().getFullYear();
    var date = todaysDate.concat('-', currentMonth, '-',year);
    const {currentUser} = firebase.auth();
    //this.updatingCasualAvailbility(currentUser.uid);
    this.props.fetechTempAvailability(currentUser.uid, date);
  }
  getYearFromDate(date){
    if (date != null) {
      return date.getFullYear();
    }
    return null;
  }
  getDayfromDate(date){
    if (date != null) {
      return this.state.weekDays[date.getDay()];
    }
    return null;
  }
  getMonthFromDate(date){
    if (date != null) {
      return this.state.months[date.getMonth()];
    }
    return null;
  }
  extractDateAsAStringFromDateNTime(dateNtime){
    if (dateNtime != null) {
      return dateNtime.getDate().toString();
    }
    return null;
  }
  // this handles clickes on checkBoxes
  // changed their state from checked to unchecked, vice-virsa
  // index is position of the element in row, whereas checkboxToBeChecked is case value
  // which helps to determine which checkbox needs to be checked
  handleChange = (date, checkboxToBeChecked) => {
    var maps = this.props.CasualAvailability;
    const {currentUser} = firebase.auth();
    let checked = {...this.state.CasualAvailability};
    switch (checkboxToBeChecked) {
      case 'AM':
        maps.get(date).AM = !maps.get(date).AM;
        updateTempAvailability(currentUser.uid, date, maps.get(date));
        this.setState({checked});
        break;
      case 'PM':
        maps.get(date).PM = !maps.get(date).PM;
        updateTempAvailability(currentUser.uid, date, maps.get(date));
        this.setState({checked});
        break;
      case 'ND':
        maps.get(date).ND = !maps.get(date).ND;
        updateTempAvailability(currentUser.uid, date, maps.get(date));
        this.setState({checked});
        break;
      default:
        this.setState({checked});
        break;
    }
  };
  // this returns correct checkbox which well be checked or unchecked
  selectingCorrectCheckedbox(date, title) {
    if (title === 'AM') {
      return !!this.props.CasualAvailability.get(date).AM;
    }
    if (title === 'PM') {
      return !!this.props.CasualAvailability.get(date).PM;
    }
    if (title === 'ND') {
      return !!this.props.CasualAvailability.get(date).ND;
    }
  }
  renderingCheckboxes(date, title) {
    return (
      <View>
        <CheckBox
          containerStyle={styles.checkBoxStyle}
          title={title}
          iconRight
          onPress={() => {
            this.handleChange(date, title);
          }}
          checked={this.selectingCorrectCheckedbox(date, title)}
        />
      </View>
    );
  }
  renderCasualAvailbility = (item, index) => {
    var maps = this.props.CasualAvailability;
    return (
      <View style={styles.RenderItemFunViewTagStyle}>
        <Text style={styles.textViewHeightWidth}>
          {maps.get(item[index]).day} {maps.get(item[index]).month} {maps.get(item[index]).date}
        </Text>
        {this.renderingCheckboxes(item[index], 'AM')}
        {this.renderingCheckboxes(item[index], 'PM')}
        {this.renderingCheckboxes(item[index], 'ND')}
      </View>
    );
  };

  renderItemSeparator = () => {
    return <View style={styles.listSeperatorStyle} />;
};

renderFlatList() {
    var maps = this.props.CasualAvailability;
    if (maps != null) {
      var newArray = [...maps.keys()];
      return (
        <View>
        <Card containerStyle={styles.CardStyling}>
            <FlatList
              extraData={newArray}
              keyExtractor={(item, index) => String(index)}
              data={newArray}
              renderItem={({index}) =>
                this.renderCasualAvailbility(newArray, index)
              }
              ItemSeparatorComponent={this.renderItemSeparator}
            />
          </Card>
        </View>
      );
    } else {
      return (
        <View>
          <Text>loading availability soon</Text>
        </View>
      );
    }
}
  render() {
    return this.renderFlatList();
  }
}

const styles = StyleSheet.create({
  ViewTagStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  RenderItemFunViewTagStyle: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  TextTagStyle: {
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
  },
  CardStyling:{
    backgroundColor: 'white',
    marginBottom: 20,
    borderColor: 'black',
    marginLeft:5,
    marginRight:5,
    marginTop: 5,
  },
  checkBoxStyle: {
    width: 76,
    height:45,
    marginLeft: 1,
    marginRight:1,
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
  listSeperatorStyle:{
    height:1,
    width:'100%',
    backgroundColor: 'black',
    marginLeft: 3,
    marginRight:4,
    marginTop:10,
    marginBottom:10,
    borderColor: 'red'
  },
  textViewHeightWidth:{
    height: 40,
    width: 90,
    marginLeft: -10,
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    CasualAvailability: state.UserReducer.CasualAvailability
  };
};
export default connect(
  mapStateToProps,
  {updateTempAvailability,fetechTempAvailability},
)(CasualAvailability);
