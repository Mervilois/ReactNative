import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Link, Picker, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'

const pp = require('../assets/Images/pp.jpg')
const orange = require('../assets/Images/orange.png')
const raisin = require('../assets/Images/raisain.png')
const boutique1 = require('../assets/Images/boutique.png')


const IconExample = () => (
  <View>
    <Icon name="lock" size={30} color="gold" />
  </View>
);
const IconExample1 = () => (
  <View style={{ backgroundColor: '#fff', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#cacaca', borderWidth: 2, borderRadius: 10, }}>
    <Icon name="arrow-left" size={20} color="#6f6b6a" />
  </View>
);
const IconExample2 = () => (
  <View style={{ backgroundColor: '#e2e2e2', width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#cacaca', borderWidth: 2, borderRadius: 10, }}>
    <Icon name="trash" size={20} color="#6f6b6a" />
  </View>
);
const IconExample4 = () => (
  <View>
    <Icon name="heart" size={20} color="#f6aba8" />
  </View>
);


const Order = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View>
          <IconExample1></IconExample1>
        </View>
        <View>
          <IconExample></IconExample>
        </View>
      </View>

      <View style={styles.titre}>
        <Text style={{ fontSize: 23, fontWeight: '600',}}>My</Text>
        <Text style={{ fontSize: 23, fontWeight: '600',}}>Order</Text>
      </View>

      <View style={styles.liste}>
        <View style={styles.produit}>
          <View style={styles.img}>
            <Image source={orange} style={{ width: 50, height: 50, }}></Image>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>1 x</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>Orange</Text>
            <Text style={{fontWeight: '600',}}>$10</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <IconExample2></IconExample2>
          </View>
        </View>

        <View style={styles.produit}>
          <View style={styles.img}>
            <Image source={orange} style={{ width: 50, height: 50, }}></Image>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>1 x</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>Orange</Text>
            <Text style={{fontWeight: '600',}}>$10</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <IconExample2></IconExample2>
          </View>
        </View>

        <View style={styles.produit}>
          <View style={styles.img}>
            <Image source={orange} style={{ width: 50, height: 50, }}></Image>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>1 x</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>Orange</Text>
            <Text style={{fontWeight: '600',}}>$10</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <IconExample2></IconExample2>
          </View>
        </View>

        <View style={styles.produit}>
          <View style={styles.img}>
            <Image source={orange} style={{ width: 50, height: 50, }}></Image>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>1 x</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <Text style={{fontWeight: '600',}}>Orange</Text>
            <Text style={{fontWeight: '600',}}>$10</Text>
          </View>
          <View style={{ justifyContent: 'center', }}>
            <IconExample2></IconExample2>
          </View>
        </View>

      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, }}>
        <Text style={{ fontSize: 18, fontWeight: '600',}}>Total Price</Text>
        <Text style={{ fontSize: 18, fontWeight: '600',}}>$50</Text>
      </View>

      <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ color: '#fff', backgroundColor: '#f2a7ab', width: 180, height: 50, paddingTop: 15, paddingLeft: 55, borderRadius: 20, }}>Payment</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  titre: {
    marginTop: 20,
  },

  liste: {
    marginTop: 30,
    gap: 25,
  },

  produit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  img: {
    backgroundColor: '#fce9c8',
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Order;