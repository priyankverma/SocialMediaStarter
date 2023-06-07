import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Text, View } from 'react-native';
import { increment, decrement } from '../redux/slices/authSlice';
function DummyCounter() {
  const count = useSelector(state => state.authentication?.value);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Inc" onPress={() => dispatch(increment())}>
        Incremenet{' '}
      </Button>
      <Text>{count}</Text>
      <Button title="Dec" onPress={() => dispatch(decrement())}>
        Decrement
      </Button>
    </View>
  );
}

export default DummyCounter;
