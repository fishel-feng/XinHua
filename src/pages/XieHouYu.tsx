import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, Text } from 'react-native';
import SearchBar from 'react-native-searchbar';
import { Header } from "../components/Header";

interface IProp {
  navigation: any
}

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];


export class XieHouYu extends PureComponent<IProp> {

  public static navigationOptions = {
    title: '歇后语大全'
  };

  private searchBar: any;

  public render() {
    return (
      <View>
        <SearchBar
          ref={(ref: any) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
        />
        <Header navigation={this.props.navigation}></Header>
        <Text>歇后语</Text>
      </View>
    );
  }

  private _handleResults(results: any) {
    this.setState({ results });
  }
}
