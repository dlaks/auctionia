import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser, IconNext, IconEditProfile, IconLanguage, IconRate, IconHelp } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ListArrow = ({profile, name, desc, type, onPress, icon}) => {
    const Icon = () => {
        if (icon === 'edit-profile')
        {
            return <IconEditProfile/>
        }
        if (icon === 'language')
        {
            return <IconLanguage/>
        }
        if (icon === 'rate')
        {
            return <IconRate/>
        }
        if (icon === 'help')
        {
            return <IconHelp/>
        }
        <IconEditProfile/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon/> : <Image source={profile} style={styles.avatar}/>}            
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext/> }        
        </TouchableOpacity>
    )
}

export default ListArrow

const styles = StyleSheet.create({
    avatar : {
        width:46, height:46, borderRadius: 46 / 2, marginRight:12
    },
    container : {
        flexDirection:'row', padding:16, borderBottomColor:colors.border, borderBottomWidth:1, justifyContent:'space-between', alignItems:'center'
    },
    name : {
        fontSize:16,
        fontFamily: fonts.primary[600],
        color:colors.text.primary
    },
    message : {
        fontSize:12, 
        fontFamily:fonts.primary[400],
        color : colors.text.secondary,
        textTransform : 'capitalize'
    },
    content : {
        flex:1,
        marginLeft:16,
    }
})
