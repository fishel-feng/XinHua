import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export class Detail extends Component {

  public static navigationOptions = {
    title: 'Detail',
    headerRight: (
      <Button
        onPress={() => console.log(1)}
        title="Info"
        color="#ccc"
      />
    ),
  };

  public render() {
    return (
      <View>
        <Text>详情</Text>
      </View>
    );
  }
}
