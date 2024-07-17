//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {aplicationColors} from '../../theme/colors';

// create a component
const NottificationCard = ({item}) => {
  return (
    <View style={{flexDirection: 'row', padding: 5, margin: 5}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: item?.notification?.android?.imageUrl}}
          style={{width: 70, height: 70}}
        />
      </View>
      <View style={{flex: 4}}>
        <Text
          style={{
            color: aplicationColors.WHITE,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          {item?.notification.title}
        </Text>
        <Text style={{color: aplicationColors.WHITE}}>
          {item?.notification.body}
        </Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default NottificationCard;
