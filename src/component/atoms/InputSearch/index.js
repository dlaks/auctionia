import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'

const InputSearch = ({label, value, onChangeText, secureTextEntry, disable, placeholder}) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
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

export default InputSearch

const styles = StyleSheet.create({
    input : border => ({
        borderWidth:1,
        borderColor: border,
        borderRadius:10,
        padding:12,
        fontFamily:fonts.primary[400]
    }),
})
