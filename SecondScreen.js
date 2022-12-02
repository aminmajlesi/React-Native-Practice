import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image, ScrollView, TextInput
} from 'react-native'

import { Actions } from 'react-native-router-flux';

const SecondScreen = () => {
	
	const goToHome = () => {
      Actions.home()
   }
	
    return(
        <View style={styles.container}>
		<TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
            <Text style={styles.welcome}>
                THIS IS THE SECOND SCREEN.
            </Text>
			</TouchableOpacity>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF',
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10,
    },
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    },
});


SecondScreen.navigationOptions ={
    title: 'Second Screen Title'
}

export default SecondScreen