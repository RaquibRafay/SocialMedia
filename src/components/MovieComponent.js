import { View, Text } from 'react-native'
import React from 'react'

const MovieComponent = () => {
    return (
        <View>
            <Text>MovieComponent</Text>
        </View>
    )
}

export const MovieExplanation = (props) => {
    const { name, value, isRating, rating } = props;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.nameContainer}>
                <Text style={styles.generalFontSize}>{name}</Text>
            </View>
            <Text style={styles.generalFontSize}>: </Text>
            <View style={styles.valueContainer}>
                {
                    isRating ?
                        rating === 5 ?
                            <Image
                                style={styles.ratingImage}
                                source={require('../../assets/images/five-stars.png')}
                            />
                            :
                            rating === 4 ?
                                <Image
                                    style={styles.ratingImage}
                                    source={require('../../assets/images/four-stars.png')} />
                                :
                                rating === 3 ?
                                    <Image
                                        style={styles.ratingImage}
                                        source={require('../../assets/images/three-stars.png')} />
                                    :
                                    rating === 2 ?
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/two-stars.png')} />
                                        :
                                        <Image
                                            style={styles.ratingImage}
                                            source={require('../../assets/images/star.png')} />
                        :
                        <Text style={styles.textValue}>{value}</Text>
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        margin: 8
    },
    nameContainer: {
        flex: 1
    },
    generalFontSize: {
        fontSize: 16
    },
    valueContainer: {
        flex: 3
    },
    textValue: {
        textAlign: 'justify',
        fontSize: 16
    },
    ratingImage: {
        width: 100,
        height: 20
    },
})

export default MovieExplanation;

