import React, {Component} from 'react';
import {Text, View, StyleSheet,FlatList} from 'react-native';
import {CheckBox, Card} from 'react-native-elements';
class CasualAvailability extends Component {
  state = {
    CasualAvailability:[
      {
        date: 'Mon dec 06',
        isAMChecked: false,
        isPMCheckd: false,
        isNDChecked: false
      },
      {
        date: 'Tue dec 07',
        isAMChecked: false,
        isPMCheckd: false,
        isNDChecked: false
      },
      {
        date: 'Wed dec 08',
        isAMChecked: false,
        isPMCheckd: false,
        isNDChecked: false
      },
      {
        date: 'Thu dec 09',
        isAMChecked: false,
        isPMCheckd: false,
        isNDChecked: false
      },
      {
        date: 'Fri dec 10',
        isAMChecked: false,
        isPMCheckd: false,
        isNDChecked: false
      },
      {
        date: 'Sat dec 11',
        isAMChecked: false,
        isPMCheckd: false,
        isNDChecked: false
      },
      {
        date: 'Sun dec 06',
        isAMChecked: false,
        isPMCheckd: false,
        isNDChecked: false
      },
    ],
  };
  // this handles clickes on checkBoxes
  // changed their state from checked to unchecked, vice-virsa
  // index is position of the element in row, whereas checkboxToBeChecked is case value
  // which helps to determine which checkbox needs to be checked
  handleChange = (index, checkboxToBeChecked) => {
    let checked = {...this.state.CasualAvailability};
    switch (checkboxToBeChecked) {
      case 'AM':
        checked[index].isAMChecked = !checked[index].isAMChecked;
        this.setState({checked});
        break;
      case 'PM':
        checked[index].isPMCheckd = !checked[index].isPMCheckd;
        this.setState({checked});
        break;
      case 'ND':
        checked[index].isNDChecked = !checked[index].isNDChecked;
        this.setState({checked});
        break;
      default:
        this.setState({checked});
        break;
    }
  };
//  this renders item on the screen
  renderItems = ({item, index}) => {
   let itemchecked = {...this.state.CasualAvailability};
    return (
      <View style={styles.RenderItemFunViewTagStyle}>
        <Text style={styles.textViewHeightWidth}>{item.date}</Text>
        <CheckBox
          containerStyle={styles.checkBoxStyle}
          title="AM"
          iconRight
          onPress={() => {
            this.handleChange(index,'AM');
          }}
          checked={itemchecked[index].isAMChecked}
        />
        <CheckBox
          containerStyle={styles.checkBoxStyle}
          title="PM"
          iconRight
          onPress={() => {
            this.handleChange(index,'PM');
          }}
          checked={itemchecked[index].isPMCheckd}
        />
        <CheckBox
          containerStyle={styles.checkBoxStyle}
          title="ND"
          iconRight
          onPress={() => {
            this.handleChange(index, 'ND');
          }}
          checked={itemchecked[index].isNDChecked}
        />
      </View>
    );
  };

  renderItemSeparator = () => {
    return <View style={styles.listSeperatorStyle} />;
};
  render() {
    return (
      <View style={styles.ViewTagStyle}>
        <Text style={styles.TextTagStyle}>Casual Availbility!!</Text>
        <Card containerStyle={styles.CardStyling}>
          <FlatList
            extraData={this.state}
            keyExtractor={item => item.date}
            data={this.state.CasualAvailability}
            renderItem={this.renderItems}
            ItemSeparatorComponent={this.renderItemSeparator}
          />
        </Card>
      </View>
    );
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
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 20,
    borderColor: 'black',
  },
  checkBoxStyle: {
    width: 76,
    height:45,
    marginLeft: 1,
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
    marginLeft: 1,
    marginTop: 20,
  },
});
export default CasualAvailability;
