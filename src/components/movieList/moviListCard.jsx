//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, token, width} from '../../utils/constants';
import {aplicationColors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';
// create a component
const MovieListCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <FastImage
        style={{width: width * 0.44, height: height * 0.35, borderRadius: 5}}
        source={{
          uri: `${IMAGE_BASE_URL}${item.poster_path}`,
          headers: {
            ccept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text
        numberOfLines={1}
        style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
        {item.title}
      </Text>
      <Text
        numberOfLines={3}
        style={{color: aplicationColors.GRAY, fontSize: 12, margin: 5}}>
        {item.overview}
      </Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.45,
  },
});

//make this component available to the app
export default MovieListCard;
