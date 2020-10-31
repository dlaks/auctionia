import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';

const ButtonAdd = ({type, onPressAdd}) => {
  return (
      <TouchableOpacity style={styles.container(type)} onPress={onPressAdd}> 
        <Text style={styles.text(type)}>+</Text>
      </TouchableOpacity>
  );
};

export default ButtonAdd;

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
    disableText : {
      fontSize: 18, fontWeight:'600', textAlign: 'center', fontFamily: 'Nunito-SemiBold', color:colors.button.disable.text
    },
    text : (type) => ({
        fontSize: 12, fontWeight:'600', textAlign: 'center', color: type === 'secondary'  ? colors.white : colors.white, fontFamily: fonts.primary[400]
    })
})
