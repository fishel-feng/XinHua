import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Item {
  id: string,
  title: string,
  content: string,
}

interface IState {
  items: Item[]
}

export class Community extends PureComponent<{}, IState> {

  private static navigationOptions = {
    title: '社区'
  };

  public state = {
    items: [
      {title: 'a', content: '111', id: '1'},
      {title: 'b', content: '111', id: '2'},
      {title: 'c', content: '111', id: '3'},
      {title: 'd', content: '111', id: '4'}
    ]
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
      <Text style={style.itemTitle}>{item.title}</Text>
      <Text style={style.itemContent}>{item.content}</Text>
      <Text>图片</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
        <Text>1997-10-15 13:13:23</Text>
        <Text>xx赞xx评论</Text>
      </View>
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
  itemTitle: {
    fontSize: 20,
    color: '#000000'
  },
  itemContent: {
    marginTop: 5,
    marginBottom: 5
  },
  separator: {
    backgroundColor: '#e9e9ef',
    height: 5
  }
});
