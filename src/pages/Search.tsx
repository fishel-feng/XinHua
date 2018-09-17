import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

interface IProp {
  navigation: any
}

export class Search extends Component<IProp> {
  public static navigationOptions = {
    title: 'Search',
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
