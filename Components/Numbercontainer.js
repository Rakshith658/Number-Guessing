import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import  Colors from '../Constants/Colors'

const Numbercontainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

export default Numbercontainer

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Colors.primary,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
    },
    number:{
        color:Colors.accent,
        fontSize:22,
    }
})
