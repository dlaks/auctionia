import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {DummyUser, ILNullPhoto, IconPerson} from '../../../assets';
import { colors, fonts, getData } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeProfile = ({onPress, type, name, profession, photo}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.descPhoto}>
                <Image source={photo} style={styles.avatar}/>
            </View>
            <View style={styles.desc}>
                <Text style={styles.name}>{name}</Text>
                <Text  style={styles.profession}>{profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        backgroundColor:colors.white
    },
    desc : {
        flex:1,
        justifyContent:'center'
    },
    avatar : {
        width:36, height:36, borderRadius:36/2, marginRight:12
    },
    name : {
        fontFamily:fonts.primary[700], fontSize:14, color:colors.text.primary, textTransform:'capitalize', marginBottom:-4
    },
    profession : {
        fontFamily:fonts.primary[600], fontSize:12, color:colors.text.secondary, textTransform:'capitalize'
    }
})
