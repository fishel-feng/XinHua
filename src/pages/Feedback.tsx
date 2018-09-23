import React, { PureComponent } from "react";
import { View, Text } from 'react-native';

export class Feedback extends PureComponent {

  public static navigationOptions = {
    title: 'Feedback'
  };

  public render() {
    return (
      <View>
        <Text>Feedback</Text>
      </View>
    );
  }
}
