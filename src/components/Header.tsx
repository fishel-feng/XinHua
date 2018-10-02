import React from 'react';
import { PureComponent } from './PureComponent';
import { View, Text, Button } from 'react-native';

interface IProp {
  navigation: any
}

export class Header extends PureComponent<IProp> {
  public render() {
    return (
      <View>
        <Button
          title="touch"
          onPress={() => this.props.navigation.goBack()}/>
        <Text>text</Text>
      </View>
    );
  }
}
