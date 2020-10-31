import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BtnIconSend = ({disablez, onPress}) => {
    if(disablez)
    {
        return (
            <TouchableOpacity style={styles.container(disablez)}>
                <IconSendDark/>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={styles.container(disablez)} onPress={onPress}>
            <IconSendLight/>
        </TouchableOpacity>   
    ) 
}

export default BtnIconSend

const styles = StyleSheet.create({
    container : (disablez) => ({
        backgroundColor:disablez ? colors.disable : colors.button.primary.background,
        width:45,
        height:45,
        borderRadius:10,
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:13,
        paddingRight:6
    })
})
