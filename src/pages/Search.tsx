import React, { PureComponent, Children } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import Button from 'react-native-button';

interface IProp {
  navigation: any
}

interface IState {
  query: string
}

export class Search extends PureComponent<IProp, IState> {

  private static navigationOptions = {
    title: 'Search',
    headerRight: (
      <Button
        style={{color: '#ccc'}}
        styleDisabled={{color: 'red'}}
        onPress={() => console.log(1)}>
        Info
      </Button>
    )
  };

  public state = {
    query: ''
  };

  public render () {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: '#FF8C00', borderWidth: 1}}
          selectionColor="#000000"
          onChangeText={query => this.setState({query})}
          value={this.state.query}/>
        <View style={style.search}>
          <View style={style.searchContainer}>
            <Button
              style={style.searchButton}
              onPress={this.search}>
              搜索
            </Button>
          </View>
        </View>
        <Text>{this.state.query}</Text>
      </View>
    );
  }

  private search = () => {
    this.props.navigation.dispatch({ type: 'Detail' });
  };
}

const style = StyleSheet.create({
  search: {
    // width: Dimensions.get('window').width,
    marginTop: 10,
    alignItems: 'center'
  },
  searchContainer: {
    backgroundColor: '#FF8C00',
    width: 50,
    height: 50,
    borderRadius: 25
  },
  searchButton: {
    lineHeight: 50,
    color: '#ffffff',
    textAlign: 'center'
  }
})
