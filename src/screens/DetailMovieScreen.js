import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { movieData } from '../../data/MovieData'
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ButtonComponent } from '../components/ButtonComponent';

const DetailMovieScreen = (props) => {
    const { navigation } = props
    const [recommended, setRecommended] = useState([]);
    const [mostView, setMostView] = useState([])
    const [year, setYear] = useState([])

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

    const compareMostView = (a, b) => {
        const viewersA = a.viewers
        const viewersB = b.viewers

        if (viewersA > viewersB) {
            return -1
        } else if (viewersA < viewersB) {
            return 1
        } else {
            return 0
        }
    }

    const compareYear = (a, b) => {
        const yearA = a.year
        const yearB = b.year

        if (yearA > yearB) {
            return -1
        } else if (yearA < yearB) {
            return 1
        } else {
            return 0
        }
    }

    useEffect(() => {
        const threeRecomended = []
        const sortedRecomended = [...movieData].
            sort(compareRating);
        setRecommended(sortedRecomended);

        const sortedMostView = [...movieData]
            .sort(compareMostView)
        setMostView(sortedMostView)

        const sortedYear = [...movieData]
            .sort(compareYear)
        setYear(sortedYear)


    }, []);

    return (
        <View>
            <View style={styles.mainCategoryContainer} >
                <View style={styles.categoryContainer} >
                    <Text style={styles.categoryText}>
                        Most View
                    </Text>
                </View>
                <View style={styles.seeAllContainer} >
                    <TouchableOpacity onPress={() => navigation.navigate('view-all', { mostView })}>
                        <Text style={styles.seeAllText} >See All</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                horizontal
                data={mostView}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.dataContainer}>
                            <Image source={{ uri: item.imageLink }} style={styles.movieImage} />
                            <View style={styles.movieDescriptionContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text>{item.year}</Text>
                                <Text>{item.rating}</Text>
                            </View>
                        </View>
                    )
                }} />
            <FlatList
                data={recommended}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListContainer}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('DetailMovie', { item })}>
                            <View style={styles.dataContainer}>
                                <Image source={{ uri: item.imageLink }} style={styles.movieImage} />
                                <View style={styles.movieDescriptionContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text>{item.year}</Text>
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
                                    <ButtonComponent onPress={() => navigation.navigate('DetailMovie', { item })} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center' }} >
                        <Text>
                            Data Empty
                        </Text>
                    </View>
                }


            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatListContainer: {
        padding: 8,

    },
    movieImage: {
        width: 130,
        height: 200,
        borderRadius: 10
    }, dataContainer: {
        margin: 8,
        borderColor: '#96ceb4',
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row'
    }, title: {
        fontSize: 18,
        fontWeight: 'bold'
    }, movieDescriptionContainer: {
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 8,
        marginStart: 8
    },
    ratingImagee: {
        width: 100,
        height: 20,
    },
    mainCategoryContainer: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        flexDirection: 'row'
    },
    categoryContainer: {
        flex: 1
    },
    categoryText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    seeAllContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    seeAllText: {
        color: '#009688',
        textDecorationLine: 'underline'
    }
})





export default DetailMovieScreen