import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const MyButtton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButtton;

const styles = StyleSheet.create({
    btn:{height:50,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ff0036",
        borderRadius:30
    },
    title:{
        fontSize:20,
        color:"#fff",
        fontFamily:"Redressed-Regular"
    }
})