import React from 'react';

import InstagramScreen from './screens/InstagramScreen'
import FacebookScreen from './screens/FacebookScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  InstagramScreen:{screen:InstagramScreen},
  FacebookScreen:{screen:FacebookScreen}
})
const AppContainer = createAppContainer(TabNavigator)
