//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {aplicationColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {MOVIELIST} from '../../utils/routes';

// create a component
const SectionHeader = props => {
  const navigation = useNavigation();
  const {title, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => navigation.navigate(MOVIELIST, {value: value})}>
        <Text style={[styles.title, styles.seeAll]}>See All</Text>
      </Pressable>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  title: {
    color: aplicationColors.WHITE,
    fontSize: 18,
    fontWeight: '600',
  },
  seeAll: {
    color: aplicationColors.YELLOW,
  },
});

//make this component available to the app
export default SectionHeader;
