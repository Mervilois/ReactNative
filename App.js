import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Link, Picker, ScrollView} from 'react-native';
import globalstyle from './style/globalstyles';
import dash from './style/dash';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'
import Home from './components/HomeScreen';
import Order from './components/OrderScreen';
import Product from './components/ProductScreen';
import Desc from './components/DescScreen';
import Search from './components/SearchScreen';
import Start from './components/StarScreen';





export default function App() {
  return (
    
    <Home/>
    // <Desc/>
    // <Search/>
    // <Start/>
    // <Order/>
    // <Product/>
  );
}  

