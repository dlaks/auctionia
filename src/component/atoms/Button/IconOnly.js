import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBackDark, IconBackLight, IconHistory, IconNavigation } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon  = () => {
        if(icon==='back-dark')
        {
            return <IconBackDark/>
        }
        if(icon==='back-light')
        {
            return <IconBackLight/>
        }
        if(icon==='no-back')
        {
            return <IconNavigation/>
        }
        if(icon==='ic-history')
        {
            return <IconHistory/>
        }
        return <IconBackDark/>
    }
    return (
        <TouchableOpacity onPress={onPress}> 
            <Icon/>
        </TouchableOpacity>
    )
}

export default IconOnly

const styles = StyleSheet.create({})
