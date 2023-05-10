import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export const Input = (props) => {
    const { title, isPassword, iconName } = props;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text>{title}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    {...props}
                />

            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 8,
    },
    titleContainer: {
        marginLeft: 16
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 20,
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space- between',
        alignItems: 'center'
    },
    input: {
        padding: 8,
        flex: 1,
        color: 'black'
    },
    iconContainer: {
        padding: 8
    }
});