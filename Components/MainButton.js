import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../Constants/Colors'

const MainButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}  disabled={props.disabled}>
            <View style={[styles.MainButton,{backgroundColor:props.disabled?"#c3909b":Colors.primary,borderColor:props.disabled?"#c3909b":Colors.accent,}]}>
                <Text style={styles.Text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton

const styles = StyleSheet.create({
    MainButton:{
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25,
        borderWidth:2,
        justifyContent:'space-between'
    },
    Text:{
        color:'white',
        fontFamily:'open-sans',
        fontSize:18,
    }
})
