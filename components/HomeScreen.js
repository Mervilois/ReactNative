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
    <Icon name="bars" size={20} color="#000" />
  </View>
);
const IconExample1 = () => (
  <View>
    <Icon name="home" size={30} color="#ec8080" />
  </View>
);
const IconExample2 = () => (
  <View>
    <Icon name="search" size={25} color="#939393" />
  </View>
);
const IconExample3 = () => (
  <View>
    <Icon name="user" size={25} color="#939393" />
  </View>
);
const IconExample5 = () => (
  <View>
    <Icon name="folder" size={25} color="#939393" />
  </View>
);
const IconExample4 = () => (
  <View>
    <Icon name="heart" size={20} color="#f6aba8" />
  </View>
);



const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.navProfile}>
        <View>
          <IconExample></IconExample>
        </View>
        <View>
          <Image source={pp} style={styles.profile}></Image>
        </View>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 25, fontWeight: '600', }}>Discover Seasonal</Text>
        <Text style={{ fontSize: 25, fontWeight: '600', }}>Fruits and Vegetables</Text>
      </View>

      <View style={styles.navbar}>
        <Text style={{ fontSize: '18px', color: '#c7615c', backgroundColor: '#f8dedf', borderRadius: '20px', padding: 5, fontWeight: '600', }}>Orange</Text>
        <Text style={{ fontSize: '18px', fontWeight: '600', }}>Grape</Text>
        <Text style={{ fontSize: '18px', fontWeight: '600', }}>Pinapple</Text>
        <Text style={{ fontSize: '18px', fontWeight: '600', }}>Strave</Text>
      </View>

      <View style={styles.cardList}>
        <ScrollView horizontal>

          <View style={styles.card1}>
            <View style={styles.like}>
              <IconExample4></IconExample4>
            </View>

            <View style={{ alignItems: 'center', top: 40, }}>
              <Image source={orange} style={{ width: 50, height: 50, }}></Image>
            </View>

            <View style={styles.price}>
              <View>
                <Text style={{ color: 'orange', fontWeight: '600', }}>Orange</Text>
              </View>
              <View>
                <Text style={{ color: 'orange', fontWeight: '600', }}>$20</Text>
              </View>
            </View>


            <View style={styles.button}>
              <Text style={{ color: '#fff', }}>ADD</Text>
            </View>
          </View>

          <View style={styles.card2}>
            <View style={styles.like}>
              <IconExample4></IconExample4>
            </View>

            <View style={{ alignItems: 'center', top: 40, }}>
              <Image source={raisin} style={{ width: 50, height: 50, }}></Image>
            </View>

            <View style={styles.price}>
              <View>
                <Text style={{ color: 'blue', fontWeight: '600', }}>Orange</Text>
              </View>
              <View>
                <Text style={{ color: 'blue', fontWeight: '600', }}>$20</Text>
              </View>
            </View>

            <View style={styles.button1}>
              <Text style={{ color: '#fff', }}>ADD</Text>
            </View>

          </View>

          <View style={styles.card1}>
            <View style={styles.like}>
              <IconExample4></IconExample4>
            </View>

            <View style={{ alignItems: 'center', top: 40, }}>
              <Image source={orange} style={{ width: 50, height: 50, }}></Image>
            </View>

            <View style={styles.price}>
              <View>
                <Text style={{ color: 'orange', fontWeight: '600', }}>Orange</Text>
              </View>
              <View>
                <Text style={{ color: 'orange', fontWeight: '600', }}>$20</Text>
              </View>
            </View>


            <View style={styles.button}>
              <Text style={{ color: '#fff', }}>ADD</Text>
            </View>
          </View>

          <View style={styles.card2}>
            <View style={styles.like}>
              <IconExample4></IconExample4>
            </View>

            <View style={{ alignItems: 'center', top: 40, }}>
              <Image source={raisin} style={{ width: 50, height: 50, }}></Image>
            </View>

            <View style={styles.price}>
              <View>
                <Text style={{ color: 'blue', fontWeight: '600', }}>Orange</Text>
              </View>
              <View>
                <Text style={{ color: 'blue', fontWeight: '600', }}>$20</Text>
              </View>
            </View>

            <View style={styles.button1}>
              <Text style={{ color: '#fff', }}>ADD</Text>
            </View>

          </View>

        </ScrollView>
      </View>

      <View style={{ marginLeft: 5, marginTop: 25, }}>
        <Text style={{ fontSize: '20px', fontWeight: '600', }}>Nearby Shop</Text>
      </View>

      <View style={styles.place}>
        <ScrollView horizontal>
          <View style={styles.place1}>
            <View>
              <Image source={boutique1} style={{ height: 50, width: 50, }}></Image>
            </View>
            <View>
              <Text>Xenter Shop</Text>
              <Text>2356 Toltrican Street</Text>
              <Text>9 A.M - 7 P.M</Text>
            </View>
          </View>

          <View style={styles.place2}>
            <View>
              <Image source={boutique1} style={{ height: 50, width: 50, }}></Image>
            </View>
            <View>
              <Text>Xenter Shop</Text>
              <Text>2356 Toltrican Street</Text>
              <Text>9 A.M - 7 P.M</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <IconExample1></IconExample1>
        <IconExample2></IconExample2>
        <IconExample5></IconExample5>
        <IconExample3></IconExample3>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
  },

  header: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   marginTop: 50,
  },

  lines: {

  },

  network: {
    flexDirection: 'row',
    gap: '5px',
  },

  navProfile: {
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: 5,
    marginTop: 10,

  },

  profile: {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
  },

  title: {
    marginLeft: 5,
    marginTop: -25,
    justifyContent: 'space-between',
  },

  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginTop: 25,
  },

  cardList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginTop: 25,
  },

  card1: {
    backgroundColor: '#fce9c8',
    height: 200,
    width: 200,
    borderRadius: 20,
  },

  card2: {
    backgroundColor: '#d9defe',
    height: 200,
    width: 200,
    borderRadius: 20,
    marginLeft: 15,
  },

  like: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 30,
    height: 30,
    padding: 5,
    position: 'absolute',
    left: 158,
    top: 10,
  },

  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 40,
    padding: 20,
  },

  button: {
    backgroundColor: '#fb9b13',
    top: 40,
    alignItems: 'center',
    height: 30,
    width: 110,
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 50,
  },

  button1: {
    backgroundColor: '#3644ad',
    top: 40,
    alignItems: 'center',
    height: 30,
    width: 110,
    justifyContent: 'center',
    borderRadius: 40,
    marginLeft: 50,
  },

  place: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  place1: {
    width: '50%',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ffdedf',
    gap: '0.5rem',
    padding: 10,
  },

  place2: {
    width: '50%',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ffdedf',
    gap: '0.5rem',
    marginLeft: '2rem',
    padding: 10,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    bottom: -40,
    left: 0,
    right: 0,
    margin: 20,
  }
});

export default Home;