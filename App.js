import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as font from  'expo-font';
import AppLoading from 'expo-app-loading';


import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import Gamescreen from './Screens/Gamescreen';
import GameOverScreen from './Screens/GameOverScreen';

const fetchFont = ()=> {
  return  font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-Bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [userNumber, setuseNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);
  const [dataloaded, setdataloaded] = useState(false)

  if (!dataloaded){
    return <AppLoading 
    startAsync={fetchFont} 
    onFinish={()=>{setdataloaded(true)}} 
    onError={(err)=>{console.log(err)}}
    />
  }

  const configureNewGameHandler = ()=>{
    setguessRounds(0);
    setuseNumber(null);
  }

  const startGameHandler = (selectedNumber) =>{
    setuseNumber(selectedNumber)
    setguessRounds(0)
  }

  const gameOverHandler = (numofRounds)=>{
    setguessRounds(numofRounds)
  }

  let Content = <StartGameScreen onStartGmae={startGameHandler}/>

  if (userNumber && guessRounds <=0) {
    Content=<Gamescreen userChoice={userNumber} onGameover={gameOverHandler}/>
  }else{
    if (guessRounds>0) {
      Content=<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
    }
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number'}/>
      {Content}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
