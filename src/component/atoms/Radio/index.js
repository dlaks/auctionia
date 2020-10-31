import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';
import Gap from '../Gap';

const Radio = ({title, onPress, type}) => {
  return (
      <>
      <TouchableOpacity style={styles.container(type)} onPress={onPress}> 
        <View style={styles.content}>
          <View style={styles.titleWrap} >
            <Text style={styles.text(type)}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Gap height={16}/>
      </>
  );
};

export default Radio;

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: colors.white, 
        borderColor: type === 'secondary' ? colors.header :  colors.border, 
        paddingVertical:10,
        borderWidth:2,
        borderRadius:10
    }),
    disablezBg : {
      paddingVertical:10,
      backgroundColor:colors.button.disable.background
    },
    text : (type) => ({
        fontSize: 18, fontWeight:'600', color: type === 'secondary'  ? colors.button.secondary.text : colors.button.secondary.text, fontFamily: fonts.primary[600], paddingHorizontal:24
    }),
    content : {
      flexDirection:'row',
      justifyContent : 'space-between',
      
    },
    titleWrap : {
      
    }
})
