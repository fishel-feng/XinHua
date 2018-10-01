import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text } from 'react-native';

export class Ci extends PureComponent {

  public static navigationOptions = {
    title: '词'
  };

  public render() {
    return (
      <View>
        <Text>词</Text>
      </View>
    );
  }
}
