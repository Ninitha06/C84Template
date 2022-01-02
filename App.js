import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigation from './navigation/DrawerNavigator';

import * as Font from 'expo-font';
import {AppLoading} from 'expo-app-loading';

const customFonts = {
  "Bubblegum-Sans" : require('./fonts/BubblegumSans-Regular.ttf')
}


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
    };
  }

  loadFonts = async () => {
    await Font.loadAsync(customFonts);
    this.setState({
      fontsLoaded: true,
    });
  };

  componentDidMount(){
    this.loadFonts();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      );
    }
  }
}
