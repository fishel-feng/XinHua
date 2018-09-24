import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text } from 'react-native';

interface IProp {
  navigation: any
}

export class About extends PureComponent<IProp> {

  public static navigationOptions = {
    title: 'About'
  };

  public render() {
    return (
      <View>
        <Text>关于</Text>
      </View>
    );
  }
}
