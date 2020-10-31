import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import {DummyUser, IconStar} from '../../../assets'
import { fonts, colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const RatedDoctor = ({onPress, name, desc, avatar}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.avatar} source={avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    avatar : {
        width:46,
        height: 46,
        marginRight:16,
        borderRadius:46/2
    },
    profile : {
        flex:1
    },
    container : {
        flexDirection:'row',
        justifyContent : 'space-between',
        paddingBottom : 16,
        borderBottomWidth:1,
        paddingBottom:18,
        marginBottom:18,
        borderBottomColor:colors.border
    },
    rate : {
        flexDirection:'row'
    }, 
    name : {
        fontSize:14, 
        fontFamily:fonts.primary[600], 
        color:colors.text.primary
    },
    category : {
        fontFamily:fonts.primary[400],
        fontSize:14,
        marginTop:2,
        color:colors.text.secondary
    }
})
