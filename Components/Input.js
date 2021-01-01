import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.Input,...props.style}}/>
    )
}

export default Input

const styles = StyleSheet.create({
    Input:{
        height:30,
        marginVertical:10,
        borderColor:'grey',
        borderBottomWidth:1,
    }
})
