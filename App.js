import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import * as font from  'expo-font';
import AppLoading from 'expo-app-loading';


import Header from './Components/Header';
import StartGameScreen from './Screens/StartGameScreen';
import Gamescreen from './Screens/Gamescreen';
import GameOverScreen from './Screens/GameOverScreen';
import {
  AdMobInterstitial,
} from 'expo-ads-admob';

const fetchFont = ()=> {
  return  font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-Bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const InterstitialId = Platform.OS === "android"?"ca-app-pub-5007288133754485/2415715086":"ca-app-pub-5007288133754485/4822386573"

export default function App() {

  const [userNumber, setuseNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);
  const [dataloaded, setdataloaded] = useState(false)
  // const [screen, setscreen] = useState(false)

  if (!dataloaded){
    return <AppLoading 
    startAsync={fetchFont} 
    onFinish={()=>{setdataloaded(true)}} 
    onError={(err)=>{console.log(err)}}
    />
  }

  const configureNewGameHandler = async()=>{
    setguessRounds(0);
    setuseNumber(null);
    await AdMobInterstitial.setAdUnitID(InterstitialId); 
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }

  const startGameHandler = (selectedNumber) =>{
    setuseNumber(selectedNumber)
    setguessRounds(0)
  }

  const gameOverHandler = (numofRounds)=>{
    setguessRounds(numofRounds)
  }

  const Guide = ()=>{
    setscreen(true)
  }

  // let Content = <Appscreen screen={Guide}/>

  
  let Content = <StartGameScreen onStartGmae={startGameHandler}/>

  if (userNumber && guessRounds <=0) {
    Content=<Gamescreen userChoice={userNumber} onGameover={gameOverHandler}/>
  }else{
    if (guessRounds>0) {
      Content=<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber}
       onRestart={configureNewGameHandler}/>
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
