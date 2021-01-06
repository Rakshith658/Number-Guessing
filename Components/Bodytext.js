import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Bodytext = (props) => {
    return (
        <Text style={{...styles.text,...props.style}}>{props.children}</Text>  
    )
}

export default Bodytext

const styles = StyleSheet.create({
    text:{
        fontFamily:'open-sans'
    }
})
