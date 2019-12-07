import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {CheckBox} from 'react-native-elements';
class PermanentAvailability extends Component {
  state = {
    daysOfWeek:[
      {day: 'MON', isAMChecked: false, isPMCheckd: false, isNDChecked: false},
      {day: 'TUE',isAMChecked: false, isPMCheckd: false, isNDChecked: false},
      {day: 'WED', isAMChecked: false, isPMCheckd: false, isNDChecked: false},
      {day: 'THU', isAMChecked: false, isPMCheckd: false, isNDChecked: false},
      {day: 'FRI', isAMChecked: false, isPMCheckd: false, isNDChecked: false},
      {day: 'SAT', isAMChecked: false, isPMCheckd: false, isNDChecked: false},
      {day: 'SUN', isAMChecked: false, isPMCheckd: false, isNDChecked: false},
    ],
  };

// this handles clickes on checkBoxes
// changed their state from checked to unchecked, vice-virsa
  // index is position of the element in row, whereas checkboxToBeChecked is case value
  // which helps to determine which checkbox needs to be checked
  handleChange = (index, checkboxToBeChecked) => {

    let checked = {...this.state};
    switch (checkboxToBeChecked) {
      case 'AM':
        checked.daysOfWeek[index].isAMChecked = !checked.daysOfWeek[index].isAMChecked;
        this.setState({checked});
        break;
      case 'PM':
        checked.daysOfWeek[index].isPMChecked = !checked.daysOfWeek[index].isPMChecked;
        this.setState({checked});
        break;
      case 'ND':
        checked.daysOfWeek[index].isNDChecked = !checked.daysOfWeek[index].isNDChecked;
        this.setState({checked});
        break;
      default:
        this.setState({checked});
        break;
    }
  }
  // this renders item on the screen
  renderItems = ({item, index}) => {
   let itemchecked = {...this.state};
    return (
      <View style={styles.ViewTagStyle}>
        <Text style={styles.textViewHeightWidth}>{item.day}</Text>
        <CheckBox
          containerStyle={styles.checkBoxStyle}
          title="AM"
          iconRight
          onPress={() => {
            this.handleChange(index,'AM');
          }}
          checked={itemchecked.daysOfWeek[index].isAMChecked}
        />
        <CheckBox
          containerStyle={styles.checkBoxStyle}
          title="PM"
          iconRight
          onPress={() => {
            this.handleChange(index,'PM');
          }}
          checked={itemchecked.daysOfWeek[index].isPMChecked}
        />
        <CheckBox
          containerStyle={styles.checkBoxStyle}
          title="ND"
          iconRight
          onPress={() => {
            this.handleChange(index, 'ND');
          }}
          checked={itemchecked.daysOfWeek[index].isNDChecked}
        />
      </View>
    );
  };

  renderItemSeparator = () => {
    return <View style={styles.listSeperatorStyle} />;
};
  render() {
    return (
      <View>
        <FlatList
          extraData={this.state}
          keyExtractor={item => item.day}
          data={this.state.daysOfWeek}
          renderItem={this.renderItems}
          ItemSeparatorComponent={this.renderItemSeparator}
        />
      </View>
    );
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
export default PermanentAvailability;
