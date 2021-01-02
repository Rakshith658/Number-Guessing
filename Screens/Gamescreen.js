import React,{useState,useRef ,useEffect} from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card';
import Numbercontainer from '../Components/Numbercontainer';

const generateRondonBetween = (min ,max, exclude) =>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum= Math.floor(Math.random()*(max-min))+min;
    if ( rndNum===exclude) {
        return generateRondonBetween(min,max,exclude)
    }else{
        return rndNum;
    }
}



const Gamescreen = (props) => {


    const [currentGuess, setcurrentGuess] =
    useState(generateRondonBetween(1,100,props.userChoice));

    const [rounds, setrounds] = useState(0)

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice,onGameover} =props;

    useEffect(()=>{
        if (currentGuess===userChoice) {
            onGameover(rounds)
        }
    },[currentGuess,userChoice,onGameover])



    const nextGuessHandler =(direction)=>{
        if ((direction ==='lower' && currentGuess < props.userChoice)||
        (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Don\'t lie !' ,'You know that this is wrong....',[{text:'Sorry!',style:'cancel'}])
            return;
        }
        if (direction ==='lower') {
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }

        const nextNumber=generateRondonBetween(currentLow.current,currentHigh.current,currentGuess)

        setcurrentGuess(nextNumber)

        setrounds(rounds+1)
    }

    return (
        <View style={styles.screnn}>
            <Text>Opponent's Guess</Text>
            <Numbercontainer>{currentGuess}</Numbercontainer>
            <Card style={styles.buttoncontainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this,'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this,'greater')}/>
            </Card>
        </View>
    )
}

export default Gamescreen

const styles = StyleSheet.create({
    screnn:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttoncontainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%',
    },
})
