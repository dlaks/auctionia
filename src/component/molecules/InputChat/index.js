import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({value, onChangeText, onButtonPress, placeholder, photo}) => {
    return (
        <View style={styles.container}>
            <View style={styles.avaView}>
                <Image source={{uri : photo}} style={styles.avatar}/>
            </View>
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText}/>
            <Button disablez={value.length < 1} type="btn-icon-send" onPress={onButtonPress}/>
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    avatar : {
        width:40, 
        height:40, 
        borderRadius: 44 / 2,
    },
    avaView : {
        height:'100%',
        marginRight:10
    },
    input : {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        flex:1,
        marginRight:10,
        fontSize:14,
        fontFamily:fonts.primary.normal,
        maxHeight:45
    },
    container : {
        borderTopWidth:1,
        borderTopColor:colors.border,
        padding:16,
        flexDirection:'row',
        backgroundColor:colors.white
    }
})
