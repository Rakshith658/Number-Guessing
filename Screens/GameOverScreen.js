import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import Titletext from '../Components/Titletext'
import Bodytext from '../Components/Bodytext'
import Colors from '../Constants/Colors'
import MainButton from '../Components/MainButton';

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Titletext>The Game is over...!</Titletext>
            <View style={styles.imagecontainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
                {/* <Image source={{uri:'https://images.app.goo.gl/P3x6P59KZZugDrrh6'}} style={styles.image}/> */}
            </View>
            <View style={styles.resultcontainer}>
                <Bodytext style={styles.resulttext}>
                    Your phone needed <Text style={styles.highlight}>{props.roundsNumber }</Text>
                    <Text> roundes to guess the number</Text> <Text style={styles.highlight}>{props.userNumber}...</Text>
                </Bodytext>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            {/* <Button title="NEW GAME" onPress={props.onRestart}/> */}
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    imagecontainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30,
    },
    image:{
        width:'100%',
        height:'100%',
        // borderRadius:200,
        // borderWidth:3,
        // borderColor:'black',
    },
    highlight:{
        color:Colors.accent,
        fontFamily:'open-sans-Bold'
    },
    resultcontainer:{
        marginHorizontal:30,
        marginVertical:15
    },
    resulttext:{
        textAlign:'center',
        fontSize:20
    },
})

