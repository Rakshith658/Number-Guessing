import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    
    return (
        <View style={styles.header}>
            <Text style={styles.headertext} >{props.title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor:'#f7287b',
        alignItems:'center',
        justifyContent:'space-between',
    },
    headertext:{
        color:'black',
        fontSize:18,
    },
})
