import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';

const ButtonSmall = ({type, title, onPress, icon, disablez}) => {
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

export default ButtonSmall;

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.buttonSmall.primary.background :  colors.buttonSmall.primary.background, 
        borderRadius:10,
        paddingHorizontal:16,
        paddingVertical:8
    }),
    disablezBg : {
      paddingVertical:10,
      borderRadius:10,
      backgroundColor: colors.buttonSmall.primary.background
    },
    disableText : {
      fontSize: 18, fontWeight:'600', textAlign: 'center', fontFamily: 'Nunito-SemiBold', color:colors.button.disable.text
    },
    text : (type) => ({
        fontSize: 12, fontWeight:'600', textAlign: 'center', color: type === 'secondary'  ? colors.white : colors.white, fontFamily: fonts.primary[400]
    })
})
