import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Alert,TouchableWithoutFeedback} from 'react-native';
import {CheckBox,Card} from 'react-native-elements';
class PermanentAvailability extends Component {
  state = {
    daysOfWeek:[
      {day:'MON'},
      {day: 'TUE'},
      {day:'WED'},
      {day: 'THU'},
      {day: 'FRI'},
      {day: 'SAT'},
      {day: 'SUN'},
    ],
    isAMChecked: false,
    isPMCheckd:false,
    isNDChecked: false,
    color: 'green',
  };
  // changing check box state, to checked and not checked
  changeCheckBoxState = item => {
    console.log(this.state.daysOfWeek[item]);
    return this.setState({isAMChecked: !this.state.isAMChecked});
  }
  render() {
    return (
      <View>
        <FlatList
          style={styles.ListStyling}
          keyExtractor={item => item.day}
          data={this.state.daysOfWeek}
          renderItem={({item, index}) => {
            return (
              <Card containerStyle={styles.cardStyling}>
                <View style={styles.ViewTagStyle}>
                  <Text style={styles.textViewHeightWidth}>{item.day}</Text>
                  <CheckBox
                    containerStyle={styles.checkBoxStyle}
                    title="AM"
                    iconRight
                    onPress={this.changeCheckBoxState.bind(item, index)}
                    checked={this.state.isAMChecked}
                  />
                  <CheckBox
                    containerStyle={styles.checkBoxStyle}
                    title="PM"
                    iconRight
                    onPress={() => {
                      this.setState({isPMChecked: !this.state.isPMChecked});
                    }}
                    checked={this.state.isPMChecked}
                  />
                  <CheckBox
                    containerStyle={styles.checkBoxStyle}
                    title="ND"
                    iconRight
                    onPress={() => {
                      this.setState({isNDChecked: !this.state.isNDChecked});
                    }}
                    checked={this.state.isNDChecked}
                  />
                </View>
              </Card>
            );
          }}
        />
      </View>
    );
  }
}
var borderColor = 'red'
//onPress={this.changeCheckBoxState}
const styles = StyleSheet.create({
  ViewTagStyle: {flexDirection: 'row'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
  checkBoxStyle: {
    width: 90,
    marginLeft: 1,
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
  textViewHeightWidth:{
    height: 40,
    width: 50,
    marginLeft: -10,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ListStyling:{
    marginTop: 10,
    marginLeft:1,
    marginRight:0,
  },
  cardStyling:{
    borderColor:borderColor,
    backgroundColor: 'white',
  },

});
export default PermanentAvailability;
// {() => {
//   this.setState({isAMChecked: !this.state.isAMChecked}); //this.setState({isTrue: !this.state.isTrue})
// }}
