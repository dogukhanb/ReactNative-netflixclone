//import liraries
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import {aplicationColors} from '../../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  fechMovieDetail,
  removeDetailData,
} from '../../store/actions/movieActions';
import Spinner from '../../components/ui/spinner';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, token, width} from '../../utils/constants';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  addFavoriteMovie,
  fechFavoriteMovies,
} from '../../store/actions/favoriteActions';
// create a component
const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  console.log(route);
  console.log(movieId);
  const {moviDetailData, pendingDetail} = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fechMovieDetail(movieId));
    return () => {
      dispatch(removeDetailData());
      dispatch(fechFavoriteMovies());
    };
  }, []);

  return (
    <View style={styles.container}>
      {pendingDetail && !moviDetailData ? (
        <Spinner />
      ) : (
        <ScrollView>
          <FastImage
            style={{
              width: width,
              height: height * 0.3,
              borderRadius: 5,
            }}
            source={{
              uri: `${IMAGE_BASE_URL}${moviDetailData?.backdrop_path}`,
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`,
              },
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Pressable
            onPress={() =>
              dispatch(
                addFavoriteMovie({
                  media_id: moviDetailData.id,
                  media_type: 'movie',
                  favorite: true,
                }),
              )
            }
            style={{position: 'absolute', right: 20, top: 20}}>
            <Ionicons size={35} color={aplicationColors.WHITE} name="heart" />
          </Pressable>
          <Text
            numberOfLines={2}
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            {moviDetailData?.title}
          </Text>
          <Text
            style={{
              color: aplicationColors.WHITEGRAY,
              fontSize: 18,
              margin: 5,
            }}>
            {moviDetailData?.overview}
          </Text>
          <Text
            style={{
              color: aplicationColors.GRAY,
              fontSize: 18,
              marginTop: 20,
            }}>
            Çıkış Tarihi:{moviDetailData?.release_date}
          </Text>
          <Text
            style={{
              color: aplicationColors.YELLOW,
              fontSize: 16,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            {moviDetailData?.popularity}
          </Text>
        </ScrollView>
      )}
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
export default MovieDetail;
