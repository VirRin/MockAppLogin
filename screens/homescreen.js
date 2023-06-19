import { StyleSheet, Text, View,TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';



const homescreen = () => {
  const navigation = useNavigation()
  return (
   <KeyboardAvoidingView
   style={styles.container}
        behavior = 'padding'> 
        <Text style ={styles.Text}> This is Home Page</Text>
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

export default homescreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'flex-end',
    alignItems:'center',
},
button:{
  backgroundColor:'#1f3865',
  width:'100%',
  padding:20,
  borderRadius:5,
  alignItems:'center',
  marginBottom:100,
},
buttonContainer:{
  width:'60%',
  justifyContent:'center',
  alignItems:'center',
  marginBottom:30,
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