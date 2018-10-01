import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Button from 'react-native-button';

interface IProp {
  navigation: any
}

export class Dictionary extends PureComponent<IProp> {

  private static navigationOptions = {
    title: '词典'
  };

  public render() {
    return (
      <View style={{height: Dimensions.get('window').height - 130}}>
        <View style={style.item}>
          <Button onPress={this.showCi} style={style.itemText}>词语</Button>
        </View>
        <View style={style.item}>
          <Button onPress={this.showIdiom} style={style.itemText}>成语</Button>
        </View>
        <View style={style.item}>
          <Button onPress={this.showXieHouYu} style={style.itemText}>歇后语</Button>
        </View>
      </View>
    );
  }

  private showCi = () => {
    this.props.navigation.dispatch({ type: 'Ci' });
  };

  private showIdiom = () => {
    this.props.navigation.dispatch({ type: 'Idiom' });
  };

  private showXieHouYu = () => {
    this.props.navigation.dispatch({ type: 'XieHouYu' });
  };
}

const style = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    width: Dimensions.get('window').width - 150,
    height: (Dimensions.get('window').height - 130) / 3 - 100,
    lineHeight: (Dimensions.get('window').height - 130) / 3 - 100,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 30,
    backgroundColor: '#cccccc',
    color: '#000000'
  }
});
