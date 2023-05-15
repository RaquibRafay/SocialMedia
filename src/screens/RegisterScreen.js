import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile } from '../store/actions/profileAction';
import { Icon } from 'react-native-elements';

const RegisterScreen = (props) => {
    const { navigation } = props

    const dispatch = useDispatch()
    const globalProfileData = useSelector(store => store.profileReducer)
    const [form, setForm] = useState({ username: '', email: '', password: '' })
    const onChangeInput = (inputType, value) => {
        setForm({
            ...form,
            [inputType]: value
        });
    };
    const sendData = () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (form.username === '' || form.email === '' || form.password === '') {
            alert('Mohon isikan semua kolom!')
        }
        else if (!emailRegex.test(form.email)) {
            alert('Mohon isikan email dengan benar')
        }
        else {
            dispatch(createProfile(form))
        }
    };
    useEffect(() => {
        console.log(form)
    },)
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
                        onChangeText={
                            (text) => onChangeInput('username', text)
                        }
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        title="Password"
                        placeholder="Password"
                        onChangeText={
                            (text) => onChangeInput('password', text)
                        }
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        title="Email"
                        placeholder="Email"
                        onChangeText={
                            (text) => onChangeInput('email', text)
                        }
                    />
                </View>
                <Button
                    text="Register"
                    onPress={() => sendData()}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.registerText}>
                            Login
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
export default RegisterScreen;