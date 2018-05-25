import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
         <Text>Hello world!</Text>
       
      <TextInput
        style={{height: 40, top: 100, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}


// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
