import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Basic from '../screens/Basic';
import Advanced from '../screens/Advanced';
import RealWorldExample from '../screens/RealWorldExample';
import ROUTE_CONSTANTS from './constants';
import message from './message';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Feather
              name="user"
              size={ROUTE_CONSTANTS.NAVIGATE_BOTTOM_ICON_SIZE}
            />
          ),
          tabBarLabel: message.BASIC,
        }}
        name={ROUTE_CONSTANTS.ROUTE_BASIC}
        component={Basic}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Feather
              name="user"
              size={ROUTE_CONSTANTS.NAVIGATE_BOTTOM_ICON_SIZE}
            />
          ),
          tabBarLabel: message.ADVANCED,
        }}
        name={ROUTE_CONSTANTS.ROUTE_ADVANCED}
        component={Advanced}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Feather
              name="user"
              size={ROUTE_CONSTANTS.NAVIGATE_BOTTOM_ICON_SIZE}
            />
          ),
          tabBarLabel: message.REAL_WORLD_EXAMPLE,
        }}
        name={ROUTE_CONSTANTS.ROUTE_REAL_WORLD_EXAMPLE}
        component={RealWorldExample}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
