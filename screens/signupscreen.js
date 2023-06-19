import { StyleSheet, Text, View,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';

const signupscreen = () => {
    const navigation = useNavigation()
    return (
     <KeyboardAvoidingView
     style={styles.container}
          behavior = 'padding'> 
          <Text style ={styles.Text}> This is the Signup Page</Text>
        <View  style={styles.buttoncontainer}>
          <TouchableOpacity
            onPress={()=> navigation.navigate("Login")}
            style={styles.button}>
          <Text style ={styles.buttonOutlineText}>Go To Login Page</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
}

export default signupscreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    button:{
      backgroundColor:'#1f3865',
      width:'100%',
      padding:15,
      borderRadius:5,
      alignItems:'center',
      marginBottom:100,
    },
    buttonContainer:{
      width:'60%',
      justifyContent:'center',
      alignItems:'center',
      marginTop: 40,
    },
    buttonOutlineText:{
      color:'white',
      fontWeight:700,
      fontSize:16,
    },
    Text:{
      color:'#1f3865',
      fontWeight:700,
      fontSize:40,
      marginBottom:400,
    },
})