import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is over...!</Text>
            <Text>Number of rounds :-{props.roundsNumber}</Text>
            <Text>Number :-{props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
