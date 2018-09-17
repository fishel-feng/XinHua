import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

interface IProp {
  navigation: any
}

export class Home extends Component<IProp> {
  private static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => console.log(1)}
        title="Info"
        color="#ccc"
      />
    ),
  };

  public render () {
    return (
      <View>
        <Text>text</Text>
        <Button
          title="touch"
          onPress={() => this.props.navigation.dispatch({ type: 'Detail' })}/>
      </View>
    );
  }
}
