import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MOVIEDETAIL, MOVIELIST, NOTTIFICATION, TAB} from '../utils/routes';
import TabNavigation from './tabNavigation';
import { Text } from 'react-native';
import MovieList from '../screens/movieList';
import Header from '../components/router/header';
import MovieDetail from '../screens/movieList/movieDetail';
import Nottification from '../screens/nottification';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: (props) => <Header  {...props}/>,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigation}
      />
      <Stack.Screen name={MOVIELIST} component={MovieList} />
      <Stack.Screen name={MOVIEDETAIL} component={MovieDetail} />
      <Stack.Screen name={NOTTIFICATION} component={Nottification} />
    </Stack.Navigator>
  );
}

export default RootNavigation;