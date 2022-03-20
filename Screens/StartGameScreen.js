import React,{useState} from 'react'
import { 
    Button,
    StyleSheet, 
    Text,
    TouchableWithoutFeedback, 
    View,
    Keyboard,
    Alert,
    Platform
} from 'react-native';
import {
    AdMobBanner,
} from 'expo-ads-admob';


import Card from '../Components/Card';
import Input from '../Components/Input'
import Colors from '../Constants/Colors';
import Numbercontainer from '../Components/Numbercontainer'
import MainButton from '../Components/MainButton';

const BANNER = Platform.OS ==="android"?"ca-app-pub-5007288133754485/9990064722":"ca-app-pub-5007288133754485/5780245021"


const StartGameScreen = (props) => {

    const [entredValue, setentredValue] = useState('');
    const [confirmed, setconfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState();

    const numberInpuHandler =(inputtext)=>{
        setentredValue(inputtext.replace(/[^0-9]/g,''))
    }

    const resetInputHandler = ()=>{
        setentredValue('')
        setconfirmed(false)
    }

    const confirmInputHandler = ()=>{

        const chosenNumber = parseInt(entredValue)
        if ( isNaN(chosenNumber) ||chosenNumber <= 0 || chosenNumber >99) {
            Alert.alert(
                'Invalid number !',
                'Number has to be number between 1 and 99',
                [{text:'okay',style:'destructive',onPress:resetInputHandler}])
            return            
        }
        setconfirmed(true)
        setentredValue('')
        setselectedNumber(chosenNumber)
        Keyboard.dismiss()
    }
1
    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summarycontainer}>
                <Text>You Selected</Text>
                <Numbercontainer>{selectedNumber}</Numbercontainer>
                <MainButton onPress={()=>{props.onStartGmae(selectedNumber)}}><Text>START GAME</Text></MainButton>
                {/* <Button title="START GAME" onPress={()=>{props.onStartGmae(selectedNumber)}}/> */}
            </Card>
        )
    }
 
    return (
        <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game..!</Text>
                {/* <Bodytext> Start New Game..!</Bodytext> */}
                {/* <View style={styles.inputContainer}> */}
                <Card style={styles.inputContainer}>
                    <Text style={styles.text}>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCurrect={false} 
                        keyboardType="numeric" 
                        maxLength={2} 
                        onChangeText={numberInpuHandler}
                        value={entredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' onPress={resetInputHandler} color={Colors.accent}/>
                        </View>
                        <View style={styles.button}>
                            {/* <MainButton onPress={confirmInputHandler}>
                                <Text>Confirm</Text>
                            </MainButton> */}
                            <Button title='Confirm'  onPress={confirmInputHandler} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
                <AdMobBanner
                    bannerSize="mediumRectangle"
                    adUnitID={BANNER}
                    servePersonalizedAds={true}
                    style={{marginTop:30}}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        padding:10,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-Bold'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },
    button:{
        width:'40%',
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summarycontainer:{
        marginTop:20,
        alignItems:'center',
    },
    text:{
        fontFamily:'open-sans'
    }
})
