import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text } from 'react-native';

export class Discuss extends PureComponent {

  public static navigationOptions = {
    title: 'Discuss'
  };

  public render() {
    return (
      <View>
        <Text>贴子</Text>
      </View>
    );
  }
}
