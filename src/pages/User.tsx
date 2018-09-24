import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View } from 'react-native';
import { Cell, CellGroup } from 'react-native-cell-components';
import Icon from 'react-native-vector-icons/Entypo';

interface IProp {
  navigation: any
}

export class User extends PureComponent<IProp> {
  private static navigationOptions = {
    title: 'User'
  };

  public render() {
    return (
      <View>
        <CellGroup>
          <Cell title="头像" value={<Icon name="chevron-thin-right" size={16} color="#ccc"/>}/>
          <Cell title="Package" value="1"/>
        </CellGroup>
        <CellGroup>
          <Cell
            title="反馈"
            value={<Icon name="chevron-thin-right" size={16} color="#ccc"/>}
            onPress={() => this.props.navigation.dispatch({ type: 'Feedback' })}/>
          <Cell
            title="关于"
            value={<Icon name="chevron-thin-right" size={16} color="#ccc"/>}
            onPress={() => this.props.navigation.dispatch({ type: 'About' })}/>
        </CellGroup>
      </View>
    );
  }
}
