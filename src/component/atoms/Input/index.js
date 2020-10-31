import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'

const Input = ({label, value, onChangeText, secureTextEntry, disable, placeholder}) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                onFocus={onFocusForm} 
                onBlur={onBlurForm} 
                secureTextEntry={secureTextEntry} 
                style={styles.input(border)} 
                value={value} 
                placeholder={placeholder}
                onChangeText={onChangeText} 
                editable={!disable} 
                selectTextOnFocus={!disable}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input : border => ({
        borderBottomWidth:1,
        borderColor: border,
        padding:2,
        fontFamily:fonts.primary[400]
    }),
    label: {
        fontSize: 14, 
        color:colors.text.secondary, 
        fontFamily:fonts.primary[400]
    }
})
