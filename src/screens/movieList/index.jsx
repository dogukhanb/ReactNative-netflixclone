//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import MovieCard from '../../components/home/moviCard';
import {aplicationColors} from '../../theme/colors';
import MovieListCard from '../../components/movieList/moviListCard';

// create a component
const MovieList = props => {
  const {value} = props.route.params;
  const {upcomingMovies, topRatedMovies, populerMovies, nowPlayingMovies} =
    useSelector(state => state.movies);

  const getData = () => {
    switch (value) {
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
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={getData()}
        renderItem={({item}) => <MovieListCard item={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: aplicationColors.PRIMARY,
  },
});

//make this component available to the app
export default MovieList;
