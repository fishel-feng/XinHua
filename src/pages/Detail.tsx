import React, { PureComponent } from "react";
import { View, Text, Button } from 'react-native';

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
