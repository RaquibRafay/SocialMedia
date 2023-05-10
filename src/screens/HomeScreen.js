import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import { songData } from '../../data/SongData';
import SongComponent from '../components/DetailSongComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import DetailSongComponent from '../components/DetailSongComponent';

const HomeScreen = (props) => {
    const { navigation } = props
    const [recommended, setRecommended] = useState([]);

    const compareRating = (a, b) => {
        const ratingA = a.rating;
        const ratingB = b.rating;
        if (ratingA > ratingB) {
            return -1;
        } else if (ratingA < ratingB) {
            return 1;
        } else {
            return 0;
        }
    };

    useEffect(() => {
        const sortedRecomended = [...songData].
            sort(compareRating);
        setRecommended(sortedRecomended);
    }, []);

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={recommended}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image source={{ uri: item.imageLink }} style={styles.songImage} />
                            <View style={styles.songDescriptionContainer} >
                                <Text style={{ fontSize: 18, }} >
                                    {item.title}
                                </Text>
                                <View style={{ marginTop: 8, marginBottom: 8 }}>
                                    <Text>
                                        {item.singer}
                                    </Text>
                                </View>
                                {
                                    item.rating === 5 ?
                                        <Image
                                            style={styles.ratingImagee}
                                            source={require('../../assets/images/five-stars.png')} />
                                        :
                                        item.rating === 4 ?
                                            <Image
                                                style={styles.ratingImagee}
                                                source={require('../../assets/images/four-stars.png')} />
                                            :
                                            item.rating === 3 ?
                                                <Image
                                                    style={styles.ratingImagee}
                                                    source={require('../../assets/images/three-stars.png')} />
                                                :
                                                item.rating === 2 ?
                                                    <Image
                                                        style={styles.ratingImagee}
                                                        source={require('../../assets/images/two-stars.png')} />
                                                    :
                                                    item.rating === 1 ?
                                                        <Image
                                                            style={styles.ratingImagee}
                                                            source={require('../../assets/images/star.png')} />
                                                        :
                                                        <Text style={styles.textValue}>{value}</Text>
                                }
                                <View style={styles.mainButtonContainer}>
                                    <View style={styles.touchAble} >
                                        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen', { item })}>
                                            <Text style={{ color: 'white' }} >SEE DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatListContainer: {
        padding: 8,

    },
    mainContainer: {
        flex: 1
    },
    flatListContainer: {
        padding: 8,

    },
    songImage: {
        width: 120,
        height: 120,

    }, dataContainer: {
        margin: 8,
        borderColor: '#A6A6BD',
        borderWidth: 2,
        alignItems: 'center',
        padding: 8,
        flexDirection: 'row'
    },
    songDescriptionContainer: {
        marginLeft: 8,
        flex: 1
    },
    ratingImagee: {
        width: 100,
        height: 20
    },
    mainButtonContainer: {
        alignItems: 'baseline'
    },
    touchAble: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A6A6BD',
        backgroundColor: '#A6A6BD',
        marginTop: 5
    },
});
export default HomeScreen;