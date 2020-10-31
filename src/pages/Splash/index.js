import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ILLogo} from '../../assets';
import { colors, fonts, getData } from '../../utils'

const Splash = ({navigation}) => {
  const [isLogin, setIsLogin] = useState(false)
  useEffect (() => {
    getDataIsLoginFromLocal()
  }, [navigation, isLogin])

  const getDataIsLoginFromLocal = () => {
    getData('isLogin').then(async res => {
        const result = await setIsLogin(res);
        setTimeout(() => {
          if(isLogin) {
            navigation.replace('MainApp')
          }   
          else
          {
            navigation.replace('GetStarted')
          }
        }, 2000)
    }) 
  }  

  return (
    <View style={styles.page}>
      {/* <ILLogo/> */}
      <Text>Auction-PROJECT</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
    title : {
        fontSize:20, 
        fontWeight:'600', 
        marginTop:20, 
        color: '#112340',
        fontFamily: fonts.primary[600]
    },
    page : {
        flex:1, 
        alignItems:'center', 
        flexDirection:'column', 
        justifyContent:'center'
    }
})
