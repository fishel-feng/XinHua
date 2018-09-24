import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text, FlatList, StyleSheet } from 'react-native';

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
    items: [{key: 'a', id: '1'}, {key: 'b', id: '2'}, {key: 'b', id: '3'}, {key: 'b', id: '4'}]
  };

  public render() {
    return (
      <View>
        <FlatList
          data={this.state.items}
          keyExtractor={item => item.id}
          renderItem={this.listItem}
          ItemSeparatorComponent={this.separator}/>
      </View>
    );
  }

  private listItem = ({item}: {item: Item})=> (
    <View style={style.item}>
      <Text>{item.key}</Text>
    </View>
  );

  private separator = () => (
    <View style={style.separator}></View>
  );
}

const style = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 10
  },
  separator: {
    backgroundColor: '#e9e9ef',
    height: 5
  }
});
