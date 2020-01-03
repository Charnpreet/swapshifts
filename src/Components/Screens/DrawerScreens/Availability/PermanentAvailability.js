import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CheckBox} from 'react-native-elements';
import firebase from 'firebase';
import {
  fetechUserAvailability,
  updateAvailbility,
} from '../../../../Actions/UserActions';
import {connect} from 'react-redux';
class PermanentAvailability extends Component {
  state = {
    weekDays:[
      {day: 'MON'},
      {day: 'TUE'},
      {day: 'WED'},
      {day: 'THU'},
      {day: 'FRI'},
      {day: 'SAT'},
      {day: 'SUN'},
    ],
    reloading: false
  };
  componentDidMount(){
    const {currentUser} = firebase.auth();
    this.props.fetechUserAvailability(currentUser.uid);
  }
// this handles clickes on checkBoxes
// changed their state from checked to unchecked, vice-virsa
  // day is a key of the element in row, whereas checkboxToBeChecked is case value
  // which helps to determine which checkbox needs to be checked
  handleChange = (day, checkboxToBeChecked) => {
    var maps = this.props.PermanentAvailability;
    const {currentUser} = firebase.auth();
    let checked = {...this.state};
    switch (checkboxToBeChecked) {
      case 'AM':
        maps.get(day).AM = !maps.get(day).AM;
        updateAvailbility(currentUser.uid, day, maps.get(day));
        this.setState({checked});
        break;
      case 'PM':
        maps.get(day).PM = !maps.get(day).PM;
        updateAvailbility(currentUser.uid, day, maps.get(day));
        this.setState({checked});
        break;
      case 'ND':
        maps.get(day).ND = !maps.get(day).ND;
        updateAvailbility(currentUser.uid, day, maps.get(day));
        this.setState({checked});
        break;
      default:
        this.setState({checked});
        break;
    }
  }
  // this draw horizontal line
  renderItemSeparator = () => {
    return <View style={styles.listSeperatorStyle} />;
};

// this returns correct checkbox which well be checked or unchecked
  renderCorrectCheckedbox(day,title) {
    if (title === 'AM') {
      return !!this.props.PermanentAvailability.get(day).AM;
    }
    if (title === 'PM') {
      return !!this.props.PermanentAvailability.get(day).PM;
    }
    if (title === 'ND') {
    return !!this.props.PermanentAvailability.get(day).ND;
    }
}
  renderingCheckboxes(day, title) {
    return (
      <View>
        <CheckBox
          containerStyle={styles.checkBoxStyle}
        title={title}
          iconRight
          onPress={() => {
            this.handleChange(day, title);
          }}
          checked={this.renderCorrectCheckedbox(day, title)}
        />
      </View>
    );
}

  renderPermanentAvailbility = ({item,index}) => {
    return (
      <View style={styles.ViewTagStyle}>
      <Text style={styles.textViewHeightWidth}>{item.day}</Text>
        {this.renderingCheckboxes(item.day, 'AM')}
        {this.renderingCheckboxes(item.day, 'PM')}
        {this.renderingCheckboxes(item.day, 'ND')}
      </View>
    );
  };
  renderFlatList() {
    if (this.props.PermanentAvailability != null) {
      return (
        <View>
          <FlatList
            extraData={this.state.weekDays}
            keyExtractor={item => item.day}
            data={this.state.weekDays}
            renderItem={this.renderPermanentAvailbility}
            ItemSeparatorComponent={this.renderItemSeparator}
          />
        </View>
      );
    } else {
      return (
        <View>
        <Text>your data will be loaded soon</Text>
        </View>
    );
    }
}
  render() {
    return this.renderFlatList();
  }
}
//onPress={this.changeCheckBoxState}
const styles = StyleSheet.create({
  ViewTagStyle: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
  checkBoxStyle: {
    width: 76,
    height:45,
    marginLeft: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
  textViewHeightWidth:{
    height: 40,
    width: 50,
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 20,
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
});

const mapStateToProps = state => {
  return {
    PermanentAvailability: state.UserReducer.PermanentAvailability,
    reload: state.UserReducer.reload
  };
};
export default connect(
  mapStateToProps,
  {fetechUserAvailability,updateAvailbility},
)(PermanentAvailability);
