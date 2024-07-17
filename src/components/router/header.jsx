//import liraries
import React, {Component} from 'react';
import {View, Image, StyleSheet, Pressable, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {aplicationColors} from '../../theme/colors';
import {height, width} from '../../utils/constants';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NOTTIFICATION} from '../../utils/routes';
import {useSelector} from 'react-redux';
// create a component
const Header = props => {
  const insets = useSafeAreaInsets();
  const name = props?.route?.name;
  const navigation = useNavigation();
  const {count} = useSelector(state => state.nottification);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: insets.left + 10,
        backgroundColor: aplicationColors.PRIMARY,
        flexDirection: 'row',
      }}>
      <View style={{flex: 1}}>
        {name ? (
          <Pressable onPress={() => navigation.goBack()}>
            <Icon size={30} color={aplicationColors.WHITE} name="arrow-left" />
          </Pressable>
        ) : (
          <Icon size={30} color={aplicationColors.WHITE} name="menu" />
        )}
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: width * 0.4,
            height: width * 0.1,
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Pressable style={{marginRight: 10}}>
          <Icon size={30} color={aplicationColors.WHITE} name="search" />
        </Pressable>
        {!name && (
          <Pressable onPress={() => navigation.navigate(NOTTIFICATION)}>
            <Icon size={30} color={aplicationColors.WHITE} name="bell" />
            <View
              style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
                borderRadius: 100,
                width: 20,
                height: 20,
                position: 'absolute',
                top: -5,
                right: -5,
              }}>
              <Text style={{color: aplicationColors.WHITE}}>{count}</Text>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;
