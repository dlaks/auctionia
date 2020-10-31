import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDoctor, IconAddActive, IconAdd, IconProfileActive, IconProfile, IconHome, IconHomeActive, IconWalletActive, IconWallet } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === "Home")
        {
            return active ? <IconHomeActive/> : <IconHome/>
        }
        if(title === "AddBarangs")
        {
            return active ? <IconAddActive/> : <IconAdd/>
        }
        if(title === "UserProfile")
        {
            return active ? <IconProfileActive/> : <IconProfile/>
        }
        if(title === "Wallet")
        {
            return active ? <IconWalletActive/> : <IconWallet/>
        }
        return <IconDoctor/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            {/* <Text style={styles.text(active)}>{title}</Text> */}
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
    },
    text : (active) => ({
        fontSize:10, 
        color: active ? colors.text.menuActive : colors.text.menuInactive, 
        fontFamily: fonts.primary[600], 
        marginTop:4
    })
})
