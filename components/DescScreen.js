import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Link, Picker, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BarChart } from 'react-native-chart-kit';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'



const brocoli = require('../assets/Images/brocoli.png')
const carotte = require('../assets/Images/carotte.png')




const IconExample1 = () => (
    <View>
        <Icon name="exclamation-circle" size={30} color="#959595" />
    </View>
);
const IconExample2 = () => (
    <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#cacaca', borderWidth: 2, borderRadius: 10, }}>
        <Icon name="shopping-bag" size={30} color="#44c390" />
    </View>
);
const IconExample3 = () => (
    <View>
        <Icon name="arrow-left" size={30} color="#959595" />
    </View>
);
const IconExample4 = () => (
    <View>
        <Icon name="trash" size={30} color="#959595" />
    </View>
);
const IconExample5 = () => (
    <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#44c390', borderWidth: 2, borderRadius: 10, }}>
        <Icon name="minus" size={30} color="#44c390" />
    </View>
);
const IconExample6 = () => (
    <View>
        <Icon name="star" size={25} color="yellow" />
    </View>
);
const IconExample7 = () => (
    <View style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderColor: '#44c390', borderWidth: 2, borderRadius: 10, }}>
      <Icon name="plus" size={20} color="#44c390" />
    </View>
  );


const Desc = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <IconExample3></IconExample3>
                </View>
                <View style={{ flexDirection: 'row', gap: 20, }}>
                    <IconExample4></IconExample4>
                    <IconExample1></IconExample1>
                </View>
            </View>

            <View style={styles.img}>
                <Image source={brocoli} style={{ width: 150, height: 180, }}></Image>
            </View>

            <View style={styles.stats}>
                <View style={styles.name}>
                    <View style={{ borderColor: '#44c390', borderWidth: 2, borderRadius: 5, alignItems: 'center', }}>
                        <Text style={{ color: '#44c390', fontWeight: '600', fontSize: 16, padding: 1, }}>Vegetables</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Broccoli</Text>
                    <Text style={{ color: '#898989', fontWeight: '600', }}>approx 100 gm</Text>
                </View>
                <View style={styles.values}>
                    <IconExample5></IconExample5>
                    <Text style={{fontSize: 20, fontWeight: '600',}}>1</Text>
                    <IconExample7></IconExample7>
                </View>
            </View>

            <View style={styles.notation}>
                <View style={{ flexDirection: 'row', gap: 10, }}>
                    <View style={styles.img2}>
                        <Image source={carotte} style={{ width: 50, height: 50, }}></Image>
                    </View>
                    <View style={{ justifyContent: 'center', }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Agrifarm Inc</Text>
                        <Text style={{ color: '#8b8b8b', }}>F5RJ+FJF, Chairtakot</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center', }}>
                    <IconExample6></IconExample6>
                    <Text style={{ color: '#8b8b8b', }}>4.9</Text>
                    <Text style={{ color: '#8b8b8b', }}>(89)</Text>
                </View>
            </View>

            <View style={styles.description}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Description</Text>
                <Text style={{ color: '#8b8b8b', fontSize: 16, }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet sed diam nonummy euismod <Text style={{ color: '#45bf8e', fontWeight: 'bold',}}>Read More</Text>
                </Text>
            </View>

            <View style={styles.add}>
                <View>
                    <IconExample2></IconExample2>
                </View>
                <View style={styles.button}>
                   <Text style={{color: '#44c390', fontWeight: 'bold', fontSize: 18,}}>Add to card $ 1.50</Text>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        padding: 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    img: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#e6f1ed',
        marginTop: 20,
        height: 270,
    },

    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },

    name: {

    },

    values: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },

    img2: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#e6f1ed',
        height: 60,
        width: 60,
    },

    notation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        borderTopColor: '#e2e2e2',
        borderBottomColor: '#e2e2e2',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        padding: 5,
        borderWidth: 2,
    },

    description: {
        marginTop: 30,
        gap: 15,
    },

    add:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },

    button:{
        borderColor: '#44c390',
        borderWidth: 2, 
        borderRadius: 10, 
        width: 270,
        alignItems: 'center',
        justifyContent: 'center',
    },
})



export default Desc;