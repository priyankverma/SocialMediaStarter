import React from 'react';
import { View, Text, Button } from 'react-native';
import { commonStyles } from '../CommonComponents/commonStyles';

function Dashboard({ navigation }) {
  return (
    <View style={commonStyles.wrapper}>
      <Text>Dashboard</Text>
      <Button title="Goto Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default Dashboard;
