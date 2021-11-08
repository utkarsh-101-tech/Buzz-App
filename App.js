import React from 'react';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FbScreen from './screens/fb';
import InstaScreen from './screens/insta';
import YtScreen from './screens/yt';

export default class App extends React.Component {
  render(){
    return (
        <AppContain/>
    );
  } 
}
const TabNav = createBottomTabNavigator({
  Facebook :{screen:FbScreen},
  Instagram :{screen:InstaScreen}
})
const AppContain = createAppContainer(TabNav);