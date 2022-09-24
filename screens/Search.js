import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TextInput} from 'react-native';


export default class Search extends Component {
  render() {
    return (
      <View style={{height: '100%', width: '100%'}}>
        <TextInput style={styles.inputView}
          placeholder='search'
          placeholderTextColor='white'
          >

          </TextInput>

    
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    
  },searchStyle: {
    height: 40,
    left: '3%',
    width: '87%',
    borderRadius: 10,
    marginTop:40,
    marginBottom: 15,
    marginStart: 10,
    marginEnd: 15,
  },
  inputView:{
  width :'80%',
  height :'10%',
  borderWidth:1,
  borderColor:'black',
  paddingLeft:20,
  color:'white',

 }
});