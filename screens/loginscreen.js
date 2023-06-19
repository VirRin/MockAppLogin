import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import homescreen from './homescreen'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
//import { auth } from '../firebase'



const loginscreen = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const navigation = useNavigation()
 

   /* const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }*/

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior = 'padding'
        >
        <View>
            <Image style={styles.image} source ={require('../assets/ma.png')}/>
        </View>

      <View style= {styles.inputContainer}>
        <Text  style={styles.Text}>Welcome</Text>
        <Text  style={styles.Text}>To</Text>
        <Text  style={styles.Textbottom}>Mock-App</Text>
        

        <TextInput
        placeholder='Email'
        value={email}
        onChangeText={text=>setEmail(text)}
        style={styles.input}
        />
    
        <TextInput
        placeholder='Password'
        value={password}
        onChangeText={text=> setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer} >
        <TouchableOpacity
        onPress={()=> navigation.navigate('Home')}
        style={styles.button}>
        <Text style ={styles.buttonText}>Login </Text>
        </TouchableOpacity>
      
        <TouchableOpacity
        onPress={()=> navigation.navigate('SU')}
        style={[styles.button, styles.buttonOutLine]}>
        <Text style ={styles.buttonOutlineText}>SignUp </Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default loginscreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius:5,
        marginTop: 5,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 40,
    },
    button:{
        backgroundColor:'#1f3865',
        width:'100%',
        padding:15,
        borderRadius:5,
        alignItems:'center',
    },
    buttonOutLine:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#1f3865',
        borderWidth:2,
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontWeight:700,
        fontSize:16,
    },
    buttonOutlineText:{
        color:'#1f3865',
        fontWeight:700,
        fontSize:16,
    },
    Text:{
        color:'#1f3865',
        fontSize:45,
        marginBottom:2,
        marginTop:2,
        textAlign: 'center',
        fontStyle:'italic',
    },
    Textbottom:{
        color:'#1f3865',
        fontSize:50,
        marginBottom:20,
        marginTop:2,
        textAlign: 'center',
        fontStyle:'italic',
    },
    image:{
        borderRadius:600,
        alignItems:'center',
    }
})