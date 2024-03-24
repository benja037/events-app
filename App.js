import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { HomeStack } from './navigation/stack';
import { MyDrawer } from './navigation/drawer';



export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
);
}

