import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../Constants/Colors'

const MainButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.MainButton}>
                <Text style={styles.Text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton

const styles = StyleSheet.create({
    MainButton:{
        backgroundColor:Colors.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25,
        borderWidth:2,
        borderColor:Colors.accent,
        justifyContent:'space-between'
    },
    Text:{
        color:'white',
        fontFamily:'open-sans',
        fontSize:18,
    }
})
