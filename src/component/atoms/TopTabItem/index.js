import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDoctor, IconAddActive, IconAdd, IconProfileActive, IconProfile, IconHome, IconHomeActive, IconWalletActive, IconWallet } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TopTabItem = ({title, active, onPress, onLongPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TopTabItem

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginRight:16,
        borderBottomColor:'black'
    },
    text : (active) => ({
        fontSize:14, 
        color: active ? colors.text.menuActive : colors.text.menuInactive, 
        fontFamily: fonts.primary[400], 
        marginTop:4
    })
})
