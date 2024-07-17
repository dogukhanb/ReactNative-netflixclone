//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SectionHeader from '../ui/sectionHeader';
import {useSelector} from 'react-redux';
import MovieCard from './moviCard';

// create a component
const Section = props => {
  const {item} = props;
  const {upcomingMovies, topRatedMovies, populerMovies, nowPlayingMovies} =
    useSelector(state => state.movies);

  const getData = () => {
    switch (item.value) {
      case 'upcoming':
        return upcomingMovies;
      case 'popular':
        return populerMovies;
      case 'top_rated':
        return topRatedMovies;
      case 'now_playing':
        return nowPlayingMovies;
      default:
        return populerMovies;
    }
  };
  return (
    <View style={styles.container}>
      <SectionHeader title={item.title} value={item.value} />
      <FlatList
        horizontal
        data={getData()}
        renderItem={({item}) => <MovieCard item={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Section;
