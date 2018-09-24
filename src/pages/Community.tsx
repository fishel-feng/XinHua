import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text, FlatList } from 'react-native';

interface Item {
  key: string,
  id: string
}

interface IState {
  items: Item[]
}

export class Community extends PureComponent<{}, IState> {

  private static navigationOptions = {
    title: '社区'
  };

  public state = {
    items: [{key: 'a', id: '1'}, {key: 'b', id: '2'}]
  };

  public render() {
    return (
      <View>
        <FlatList
          data={this.state.items}
          keyExtractor={item => item.id}
          renderItem={this.listItem}/>
      </View>
    );
  }

  private listItem = ({item}: {item: Item})=> {
    return <Text>{item.key}</Text>;
  };
}
