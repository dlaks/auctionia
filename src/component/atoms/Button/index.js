import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';
import IconOnly from './IconOnly';
import BtnIconSend from './BtnIconSend';

const Button = ({type, title, onPress, icon, disablez}) => {
  if(type === 'btn-icon-send')
  {
    return (
      <BtnIconSend disablez={disablez} onPress={onPress}/>
    );
  }
  if(type === 'icon-only')
  {
    return(
      <IconOnly icon={icon} onPress={onPress}/>
    );
  }
  if(disablez)
  {
    return (
        <View style={styles.disablezBg}> 
          <Text style={styles.disableText}>{title}</Text>
        </View>
    );
  }
  return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}> 
        <Text style={styles.text(type)}>{title}</Text>
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background :  colors.button.primary.background, 
        paddingVertical:10,
        borderRadius:10,
        borderWidth: type === 'secondary' ? 1 :  0,
    }),
    disablezBg : {
      paddingVertical:10,
      borderRadius:10,
      backgroundColor:colors.button.disable.background
    },
    disableText : {
      fontSize: 18, textAlign: 'center', fontFamily: fonts.primary[600], color:colors.button.disable.text
    },
    text : (type) => ({
        fontSize: 18, textAlign: 'center', color: type === 'secondary'  ? colors.button.secondary.text : colors.button.primary.text, fontFamily: fonts.primary[400]
    })
})
