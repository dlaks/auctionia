import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';

const Tags = ({type, title, onPress}) => {
  return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}> 
        <Text style={styles.text(type)}>{title}</Text>
      </TouchableOpacity>
  );
};

export default Tags;

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'primary' ? colors.violet : colors.white, 
        padding:8,
        borderWidth:1,
        borderColor: colors.violet,
        borderRadius:18,
        marginRight:16
    }),
    text : (type) => ({
        fontSize: 12, 
        fontWeight:'600', 
        textAlign: 'center', 
        color: type === 'secondary'  ? colors.text.primary : colors.white, 
        fontFamily: fonts.primary[400]
    })
})
