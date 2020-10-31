import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {IconNext } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Comment = ({profile, name, desc, type, onPress, photo}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.avaView}>
                <Image source={{uri : photo}} style={styles.avatar}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.message}>{desc}</Text>
                <Text style={styles.time}>3 days ago</Text>
            </View>
            {type === 'next' && <IconNext/> }        
        </TouchableOpacity>
    )
}

export default Comment

const styles = StyleSheet.create({
    avatar : {
        width:40, 
        height:40, 
        borderRadius: 44 / 2,
    },
    avaView : {
        height:'100%'
    },
    container : {
        flexDirection:'row', 
        paddingBottom:16, 
        justifyContent:'space-between', 
        alignItems:'center',
        paddingHorizontal:16,
        borderBottomWidth:1,
        borderColor:colors.border,
        marginBottom:16
    },
    name : {
        fontSize:16,
        fontFamily: fonts.primary[700],
        color:colors.text.primary
    },
    message : {
        fontSize:14, 
        fontFamily:fonts.primary[600],
        color : colors.text.primary,
        textTransform : 'capitalize'
    },
    time : {
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
