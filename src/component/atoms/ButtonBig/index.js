import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';

const ButtonBig = ({type, title, onPress}) => {
  return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <View style={styles.boxButton}>
            <Text style={styles.text(type)}>{title}</Text>
        </View> 
        <View style={styles.smallBox}>

        </View>
      </TouchableOpacity>
  );
};

export default ButtonBig;

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background :  colors.button.primary.background, 
        paddingVertical:12,
        paddingHorizontal:10,
        borderRadius:20,
        width:200,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    }),
    smallBox : {
        width:40,
        height:40,
        backgroundColor:colors.black,
        alignContent:'flex-end',
        borderRadius:5
    },
    text : (type) => ({
        fontSize: 18, textAlign: 'center', color : colors.black, fontFamily: fonts.primary[600]
    }),
    boxButton : {
        alignItems:'center',
        flex:1
    }
})
