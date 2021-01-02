import React,{useState} from 'react'
import { 
    Button,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback, 
    View,
    Keyboard,
 } from 'react-native';


import Card from '../Components/Card';
import Input from '../Components/Input'
import Colors from '../Constants/Colors';


const StartGameScreen = () => {

    const [entredValue, setentredValue] = useState('');

    const numberInpuHandler =(inputtext)=>{
        setentredValue(inputtext.replace(/[^0-9]/g,''))
    }
 
    return (
        <TouchableWithoutFeedback onPress={()=>{ keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start New Game</Text>
                {/* <View style={styles.inputContainer}> */}
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
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
                            <Button title='Reset' onPress={()=>{}} color={Colors.accent}/>
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirm'  onPress={()=>{}} color={Colors.primary}/>
                        </View>
                    </View>
                </Card>
                {/* </View> */}
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
        // shadowColor:'black',
        // shadowOffset:{
        //     width:0,
        //     height:2
        // },
        // shadowRadius:6,
        // shadowOpacity:0.26,
        // elevation:5,
        // backgroundColor:'white',
        // padding:20,
        // borderRadius:10,
    },
    title:{
        fontSize:20,
        marginVertical:10,
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
    }
})
