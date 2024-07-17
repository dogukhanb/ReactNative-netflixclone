//import liraries
import React, {useEffect} from 'react';
import {View, FlatList, Platform, PermissionsAndroid} from 'react-native';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import {screenStyles} from '../../styles/screenStyles';
import widgets from '../../widgets/widgets.json';
import Section from '../../components/home/section';
import {useDispatch} from 'react-redux';
import {
  fechNowPlayingMovies,
  fechPopulerMovies,
  fechTopRatedMovies,
  fechUpcomingMovies,
} from '../../store/actions/movieActions';
import {
  incrementNottification,
  setNottification,
} from '../../store/slice/nottificationSlice';

// create a component
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fechUpcomingMovies());
    dispatch(fechTopRatedMovies());
    dispatch(fechNowPlayingMovies());
    dispatch(fechPopulerMovies());
  }, []);
  const requestPermission = async () => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } else {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('authStatus', authStatus);
      }
    }
  };
  const getToken = async () => {
    // const token =await messaging().getToken()
    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(x => console.log('token', x))
      .catch(e => console.log(e));
  };
  useEffect(() => {
    firebase.messaging().onMessage(response => {
      dispatch(incrementNottification());
      dispatch(setNottification(response));
    });
    getToken();
    requestPermission();
    const unsubscribe = messaging().onMessage(async remoteMessaging => {
      console.log(JSON.stringify(remoteMessaging));
    });
    return unsubscribe;
  }, []);
  return (
    <View style={screenStyles.container}>
      <FlatList
        data={widgets}
        renderItem={({item}) => <Section item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
