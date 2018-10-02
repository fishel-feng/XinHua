import React from 'react';
import { PureComponent } from '../components/PureComponent';
import { View, Text, Button } from 'react-native';

interface IProp {
  navigation?: any
}

export class Header extends PureComponent<IProp> {

  public render () {
    return (
      <View>
        <Button
          title="touch"
          onPress={() => this.props.navigation.dispatch({ type: 'Back' })}/>
        <Text>text</Text>
      </View>
    );
  }
}
