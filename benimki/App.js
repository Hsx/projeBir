/**
 * Sample React Native App
 * https://github.com/facebook/react-native
  * @format
 * @flow
 * date:21-09-2018 10:39
 */

//İMPORT EDİLENLER
import React from 'react';
import { View, AppRegistry } from 'react-native';

//kendi componentlerimiz
import Header from './src/components/Header';
import Liste from './src/components/Liste';


const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Örnek Proje'} />
    <Liste />
  </View>
);

//render ettiklerimiz
AppRegistry.registerComponent('projeBir', () => App);
