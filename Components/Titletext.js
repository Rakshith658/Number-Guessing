import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Titletext = (props) => {
    return (
        <Text style={styles.text}>{props.children}</Text>  
    )
}

export default Titletext

const styles = StyleSheet.create({
    text:{
        fontFamily:'open-sans-Bold'
    }
})
