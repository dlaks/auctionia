import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import {DummyUser, IconStar} from '../../../assets'
import { fonts, colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const RatedDoctorCard = ({onPress, name, desc, avatar}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.avatar} source={avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RatedDoctorCard

const styles = StyleSheet.create({
    avatar : {
        width:100,
        height: 100,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    profile : {
        flex:1,
        backgroundColor:colors.white,
        padding:6,
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    container : {
        justifyContent : 'space-between',
        paddingBottom : 16,
        marginRight:10,
    },
    rate : {
        flexDirection:'row'
    }, 
    name : {
        fontSize:16, 
        fontFamily:fonts.primary[600], 
        color:colors.text.primary
    },
    category : {
        fontFamily:fonts.primary[400],
        fontSize:12,
        marginTop:2,
        color:colors.text.secondary
    }
})
