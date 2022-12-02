import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image, ScrollView, TextInput
} from 'react-native'

import { Actions } from 'react-native-router-flux';

import List from './List.js'
import Input from './Input.js'

class Home extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

 render() {
	 
	 const goToSeceond = () => {
      Actions.secondscreen()
   }
    return (
	
	<ScrollView>
	<List />
	
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>
            You clicked { this.state.count } times
          </Text>
        </View>
	  
	  </View>
	  
	  <Input  />
	  
	  
	   <View style={styles.container}>
	   
	   <TouchableOpacity style = {{ margin: 128 }} onPress = {goToSeceond}>
         <Text>
            Next page >
          </Text>
      </TouchableOpacity>
	   
        </View>
	  
	  </ScrollView>
	  
	  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
	marginTop: 60
  }
})

export default Home;
