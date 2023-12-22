import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Link, Picker, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'
import { Emoji } from 'react-native-emoji';

const mano = require('../assets/Images/mano.png')
const mano2 = require('../assets/Images/mano2.png')

const Start = ()  =>{
    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center', marginBottom: 'auto',}}>
                <Image source={mano2} style={{height: 280, width: 120,}}></Image>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>Order Groceries</Text>
                <Text style={styles.title}>and Get delivered</Text>
                <Text style={styles.title}>in few minutes</Text>
                <View style={styles.button}>
                    <Text style={{fontSize: 20, fontWeight: '600', color: '#44c390',}}>Get Started</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e6f1ed',
        height: 'auto',
    },

    text:{
        backgroundColor: '#fff',
        height: '45%',
        width: '100%',
        marginTop: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },

    button:{
        height: 'auto',
        width:180,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#44c390',
        backgroundColor: '#fff',
        marginTop: 20,
    }
})

export default Start;