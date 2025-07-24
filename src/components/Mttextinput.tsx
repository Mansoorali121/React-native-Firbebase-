import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Mttextinput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput  {...props} style={styles.textinput}/>
      <View style={styles.border}>

      </View>
    </View>
  )
}

export default Mttextinput;

const styles = StyleSheet.create({
    container:{height:50,
        width:"100%",
        justifyContent:"center",
        paddingHorizontal:10,
        marginBottom:20
    },
    textinput:{ width:"100%",
        height:50,

    },
    border:{width:"100%",
        height:1,
        backgroundColor:"gray",
        alignSelf:"center"
    
    },
})