import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { auth } from '../firebase/config';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from "react-redux";
import { saveUser } from "./../store/UserActions";

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const navigation = useNavigation();

    useEffect(() => {

        onAuthStateChanged(auth, user => {
            if(user){

                dispatch(saveUser(user.email))

                navigation.navigate("Main")

            }
        })
    }, [])


    const handleSignUp = () => {

        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {

            setEmail('')
            setPassword('')

            const user = userCredentials.user;
            console.log("Registered user: "+user.email)

        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {


        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            setEmail('')
            setPassword('')
            const user = userCredentials.user;
            
            console.log("Logged in with: "+user.email)
            
        })
        .catch(error => alert(error.message))

    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text=> setEmail(text)}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text=> setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },

    inputContainer: {
        width: '80%'

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5

    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2

    },
    buttonOutlineText: {

        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16

    }

})
