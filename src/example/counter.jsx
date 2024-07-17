//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../store/slice/counterSlice';

// create a component
const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>{count}</Text>

      <Button
        title="Increment"
        color="green"
        onPress={() => dispatch(increment())}
      />
      <Button
        title="Decrement"
        color={'red'}
        onPress={() => dispatch(decrement())}
      />
      <Button
        title="Add +5"
        color={'red'}
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Counter;
