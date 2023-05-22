import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginUser } from '../store/actions/profileAction';

const LoginScreen = (props) => {
    const { navigation } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const globalProfileData = useSelector(store => store.profileReducer)
    useEffect(() => {
        console.log("Data Global")
        console.log(globalProfileData)
    })

    const checkData = () => {
        if (username === '' || password === '') {
            alert('Mohon inputnya')
        } else if ((username.toLowerCase() === globalProfileData.username.toLowerCase()) && (password.toLowerCase() === globalProfileData.password.toLowerCase())) {
            dispatch(loginUser(true))
            navigation.navigate('Start')
        } else {
            alert("credential salah")
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/login.png')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        title="Username"
                        placeholder="Username"
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        title="Password"
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <Button
                    onPress={() => checkData()}
                    text="Login"
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registerText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scroll: {
        flexGrow: 1
    },
    mainContainer: {
        backgroundColor: '#E6E6FA',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        marginTop: 32,
        marginBottom: 16
    },
    image: {
        width: 180,
        height: 180
    },
    inputContainer: {
        padding: 16,
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    text: {
        fontSize: 16
    },
    registerText: {
        color: '#1A5B0A',
        fontSize: 16
    }
});
export default LoginScreen;