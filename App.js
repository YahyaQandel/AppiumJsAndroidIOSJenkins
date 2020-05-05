/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';

export const testProps = id => Platform.OS === 'android' ? {accessibilityLabel: id} : {testID: id}; 
const App: () => React$Node = () => {
  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
          <Text {...testProps("welcomeTestLabel")}>Text to be tested</Text>
          </View>
  );
};

export default App;
