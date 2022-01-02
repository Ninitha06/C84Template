import * as React from 'react';

import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CreateStory from '../screens/CreateStory';
import StoryFeed from '../screens/StoryFeed';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.tabBar}
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'home' : 'home-outline';
            }
            if (route.name === 'Create') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={30}
                color={color}
                style={styles.icons}
              />
            );
          },
          headerShown: false,
        };
      }}
      activeColor="#ee8249"
      inactiveColor="grey">
      <Tab.Screen name="Feed" component={StoryFeed} />
      <Tab.Screen name="Create" component={CreateStory} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2f345d',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '8%',
    overflow: 'hidden', //to cause rounding corners
    position: 'absolute', //Required to make sure it does not have white background near rounded corners
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
