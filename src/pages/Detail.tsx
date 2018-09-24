import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text } from 'react-native';

export class Detail extends PureComponent {

  public static navigationOptions = {
    title: 'Detail'
  };

  public render() {
    return (
      <View>
        <Text>详情</Text>
      </View>
    );
  }
}
