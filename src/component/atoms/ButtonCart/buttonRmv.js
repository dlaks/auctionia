import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';

const ButtonRmv = ({type, onPressRemove}) => {
  return (
      <TouchableOpacity style={styles.container(type)} onPress={onPressRemove}> 
        <Text style={styles.text(type)}>-</Text>
      </TouchableOpacity>
  );
};

export default ButtonRmv;

const styles = StyleSheet.create({
    container: (type) => ({
      backgroundColor: type === 'secondary' ? colors.buttonSmall.primary.background :  colors.buttonSmall.primary.background, 
      borderRadius:24/2,
      width:24,
      height:24,
      justifyContent:'center'
    }),
    disablezBg : {
      paddingVertical:10,
      borderRadius:10,
      backgroundColor: colors.buttonSmall.primary.background
    },
    text : (type) => ({
        fontSize: 14, textAlign: 'center', color: type === 'secondary'  ? colors.white : colors.white, fontFamily: fonts.primary[800]
    })
})
