
import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import SecondScreen from './SecondScreen.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "secondscreen" component = {SecondScreen} title = "SecondScreen" />
      </Scene>
   </Router>
)
export default Routes