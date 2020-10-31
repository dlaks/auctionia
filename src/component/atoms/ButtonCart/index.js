import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, fonts } from '../../../utils'
import BtnAdd from './buttonAdd'
import BtnRmv from './buttonRmv'

const ButtonCart = ({isAdd, onPressAdd, type, onPressRemove}) => {
    if(isAdd) {
        return (
            <TouchableOpacity style={styles.container(type)} onPress={onPressAdd}> 
                <Text style={styles.text(type)}>+</Text>
            </TouchableOpacity>
        )
    }
    if(!isAdd)
    {
        return (
            <TouchableOpacity style={styles.container(type)} onPress={onPressRemove}> 
                <Text style={styles.text(type)}>-</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonCart

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
      backgroundColor:colors.buttonSmall.primary.background
    },
    text : (type) => ({
        fontSize: 12, fontWeight:'600', textAlign: 'center', color: type === 'secondary'  ? colors.white : colors.white, fontFamily: fonts.primary[400]
    })
})
