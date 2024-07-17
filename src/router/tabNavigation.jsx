import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorite from '../screens/favorite';
import {FAVORITE, HOME} from '../utils/routes';
import Home from '../screens/home';
import {aplicationColors} from '../theme/colors';
import TabIcon from '../components/router/tabIcon';
import Header from '../components/router/header';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            iconName={route?.name}
            route={route}
          />
        ),
        tabBarStyle: {
          backgroundColor: aplicationColors.PRIMARY,
        },
        tabBarActiveTintColor: aplicationColors.WHITE,
        tabBarInactiveTintColor: aplicationColors.GRAY,
        header: () => <Header />,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={FAVORITE} component={Favorite} />
    </Tab.Navigator>
  );
}
