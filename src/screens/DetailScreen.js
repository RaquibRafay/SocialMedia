import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import DetailSongComponent from '../components/DetailSongComponent';

const DetailScreen = () => {
    return (
        <View style={styles.containerLuar}>
            <Image source={{}} style={styles.styleImage}/>
            <View style={styles.containerTitle}>
                <Text style={styles.styleTitle}></Text>
            </View>
            <View>
                <DetailSongComponent/>
                <DetailSongComponent/>
                <DetailSongComponent/>
                <DetailSongComponent/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containerLuar: {
        alignItems:'center',
        margin:16
    },
    styleImage:{
        width:200,
        height:200,
        borderWidth:2,
        borderRadius:10,
        borderColor:'salmon'
    },
    containerTitle:{
        marginTop:8,
        marginBottom:16,
    },
    styleTitle:{
        fontSize:20,
        fontWeight:'bold'
    }
});
export default DetailScreen;