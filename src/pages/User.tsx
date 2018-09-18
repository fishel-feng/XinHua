import React, { Component } from "react";
import { View, Text, Image } from 'react-native';
import { Cell, CellGroup } from 'react-native-cell-components';
import Icon from 'react-native-vector-icons/Entypo';

export class User extends Component {
  private static navigationOptions = {
    title: 'User'
  };

  public render() {
    return (
      <View>
        <CellGroup>
          {/* <Image source={require('')}/> */}
          <Cell title="头像" value={<Icon name="chevron-thin-right" size={16} color="#ccc"/>}/>
          <Cell title="Package" value="1"/>
        </CellGroup>
      </View>
    );
  }
}
