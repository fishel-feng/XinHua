import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text } from 'react-native';

export class Idiom extends PureComponent {

  public static navigationOptions = {
    title: '成语'
  };

  public render() {
    return (
      <View>
        <Text>成语</Text>
      </View>
    );
  }
}
