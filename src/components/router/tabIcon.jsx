//import liraries
import React from 'react';
import {FAVORITE, HOME} from '../../utils/routes';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
const TabIcon = ({size, color, iconName, focused}) => {
  if (iconName == HOME) {
    return <Ionicons size={size} color={color} name={'home'} />;
  } else if (iconName == FAVORITE) {
    return <Ionicons size={size} color={color} name="heart" />;
  }
};
export default TabIcon;