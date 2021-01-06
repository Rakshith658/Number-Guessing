import React,{useState,useRef ,useEffect} from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card';
import MainButton from '../Components/MainButton';
import Numbercontainer from '../Components/Numbercontainer';
import { Ionicons } from '@expo/vector-icons'
import Bodytext from '../Components/Bodytext';

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

const RenderList =(Value,numofRounds)=>{
    return(    
    <View key={Value} style={styles.list}>
        <Bodytext>#{numofRounds}</Bodytext>
        <Bodytext>{Value}</Bodytext>
    </View>
    )
}

const Gamescreen = (props) => {

    const initialGuess=generateRondonBetween(1,100,props.userChoice)


    const [currentGuess, setcurrentGuess] = useState(initialGuess);

    const [PastGuess, setPastGuess] = useState([initialGuess])

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const {userChoice,onGameover} =props;

    useEffect(()=>{
        if (currentGuess===userChoice) {
            onGameover(PastGuess.length)
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
            currentLow.current = currentGuess +1;
        }

        const nextNumber=generateRondonBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess,
        )

        setcurrentGuess(nextNumber)

        // setrounds(rounds+1)
        setPastGuess(curPastGuess=>[nextNumber,...curPastGuess])
    }

    return (
        <View style={styles.screnn}>
            <Text>Opponent's Guess</Text>
            <Numbercontainer>{currentGuess}</Numbercontainer>
            <Card style={styles.buttoncontainer}>
                <MainButton onPress={nextGuessHandler.bind(this,'lower')}>
                    <Ionicons name="md-remove" size={24} color='white'/>
                </MainButton>
                <MainButton  onPress={nextGuessHandler.bind(this,'greater')}>
                    <Ionicons name="md-add" size={24} color='white'/>
                </MainButton>
            </Card>
            <View style={styles.listItem}>
                <ScrollView contentContainerStyle={styles.listContainer}>
                    {PastGuess.map((guess,index)=> RenderList(guess ,PastGuess.length-index))}
                </ScrollView>
            </View>
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
        width:400,
        maxWidth:'90%',
    },
    list:{
        borderColor:'#ccc',
        borderWidth:1,
        padding:15,
        marginVertical:10,
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:20,
        justifyContent:'space-around',
        width:'60%',
    },
    listItem:{
        width:'80%',
        flex:1,
    },
    listContainer:{
        alignItems:'center',
        flexGrow:1,
        justifyContent:'flex-end'
    }
})
