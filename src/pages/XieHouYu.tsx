import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text } from 'react-native';

export class XieHouYu extends PureComponent {

  public static navigationOptions = {
    title: '歇后语'
  };

  public render() {
    return (
      <View>
        <Text>歇后语</Text>
      </View>
    );
  }
}
