import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

// Components
import StackNavigation from './src/navigation/Tabs';

export default function App() {
  return (
    <Provider store={store} >
      {/* <View style={styles.container}>
        <Text>Hello world</Text>
      </View> */}
      <StackNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
