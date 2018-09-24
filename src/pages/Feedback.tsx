import React from "react";
import { PureComponent } from '../components/PureComponent';
import { View, TextInput, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IState {
  feedback: string
}

export class Feedback extends PureComponent<{}, IState> {

  public static navigationOptions = {
    title: '反馈',
    headerRight: (
      <Icon style={{marginRight: 10}} name="send-o" size={16} color="#000000"/>
    )
  };

  public state = {
    feedback: ''
  };

  public render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {/* <Text>{this.state.feedback}</Text> */}
        <TextInput
          style={style.feedback}
          selectionColor="#000000"
          onChangeText={feedback => this.setState({feedback})}
          value={this.state.feedback}/>
      </View>
    );
  }
}

const style = StyleSheet.create({
  feedback: {
    marginTop: 20,
    height: Dimensions.get('window').height - 150,
    width: Dimensions.get('window').width - 20,
    borderColor: '#000000',
    borderWidth: 1
  }
});
