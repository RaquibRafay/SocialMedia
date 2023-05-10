import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { FlatList } from 'react-native'


const SeeAllScreen = (props) => {
    const { route } = props
    const dataMovie = route.params.mostView

    useEffect(() => {
        console.log(dataMovie)
    })
    return (
        <View>
            <FlatList
                contentContainerStyle={styles.mainDataContainer}
                data={dataMovie}
                keyExtractor={(item) => item.id}
                numColumns={2}
                key={2}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.movieContainer}>
                            <Image
                                style={styles.movieImage}
                                source={{ uri: item.imageLink }}

                            />
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainDataContainer: {
        padding: 8
    },
    movieContainer: {
        margin: 8,
        padding: 16,
        backgroundColor: 'skyblue'
    },
    movieImage: {
        width: 130,
        height: 200
    }
});

export default SeeAllScreen