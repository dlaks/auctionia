import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'
import { color } from 'react-native-reanimated'

const InputLarge = ({label, value, onChangeText, secureTextEntry, disable}) => {
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
                onChangeText={onChangeText} 
                editable={!disable} 
                selectTextOnFocus={!disable}
            />
        </View>
    )
}

export default InputLarge

const styles = StyleSheet.create({
    input : border => ({
        borderWidth:1,
        height:150,
        borderTopColor: colors.border,
        borderBottomColor: colors.border,
        borderLeftColor: 'white',
        borderRightColor: 'white',
        padding:12
    }),
    label: {
        fontSize: 16, 
        color:colors.text.secondary, 
        marginBottom:6, 
        fontFamily:fonts.primary[400]
    }
})
