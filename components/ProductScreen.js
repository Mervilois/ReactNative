import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Link, Picker, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'
import { Bar } from 'react-native-progress';

const pp = require('../assets/Images/pp.jpg')
const orange = require('../assets/Images/orange.png')
const raisin = require('../assets/Images/raisain.png')
const boutique1 = require('../assets/Images/boutique.png')
const mandarine = require('../assets/Images/mandarine.png')


const IconExample = () => (
  <View>
    <Icon name="share" size={20} color="#000" />
  </View>
);
const IconExample1 = () => (
  <View style={{ backgroundColor: '#f2a8a9', width: 40, height: 40, padding: 10, borderRadius: 10, }}>
    <Icon name="arrow-left" size={20} color="#fff" />
  </View>
);
const IconExample4 = () => (
  <View>
    <Icon name="heart" size={20} color="#f6aba8" />
  </View>
);


const ProgressExample = () => {
  return (
    <View>
      <Bar progress={0.5} width={340} height={5} color='#f3a7a9' />
    </View>
  );
};

const Product = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View>
          <IconExample1></IconExample1>
        </View>
        <View>
          <Text style={{ fontWeight: '600', fontSize: 20, }}>Product Detail</Text>
        </View>
        <View>
          <IconExample></IconExample>
        </View>
      </View>

      <View style={styles.desc}>
        <Text style={{ fontSize: 28, fontWeight: '600', }}>Juicy Orange</Text>
        <Text style={{ color: '#f2b5b0', }}>Sweet and Juicy</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation
        </Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.like} >
          <IconExample4></IconExample4>
        </View>
        <View style={styles.more}>
          <Text style={{ color: '#fff', fontSize: 18, }}>Find Neurest Store</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ alignItems: 'center', marginTop: -110, }}>
          <Image source={mandarine} style={{ width: 190, height: 190, }}></Image>
        </View>
        <View style={{ padding: 17, }}>
          <Text style={{ fontWeight: '600', fontSize: 20, letterSpacing: 1, }}>Nitrition Facts</Text>

          <View style={{ marginTop: 17, gap: 29, }}>

            <View style={{ gap: 2, }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 18, }}>Fiber  3 g</Text>
                <Text style={{ fontSize: 18, }}>7%</Text>
              </View>
              <View>
                <ProgressExample />
              </View>
            </View>
            <View style={{ gap: 2, }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={{ fontSize: 18, }}>Good Sugar  12 g</Text>
                <Text style={{ fontSize: 18, }}>5%</Text>
              </View>
              <View>
                <ProgressExample />
              </View>
            </View>
          </View>

        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf0da',
    padding: 17,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  desc: {
    gap: 6,
    marginTop: 20,
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    gap: 5,
  },

  like: {
    borderColor: '#f2a8a9',
    borderWidth: 2,
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  more: {
    width: 240,
    height: 50,
    borderColor: '#f2a8a9',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#f2a8a9',
  },

  footer: {
    backgroundColor: '#fff',
    height: '40%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 'auto',
    margin: -17,
  },
});


export default Product