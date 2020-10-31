import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { fonts, colors } from '../../../utils'

const CardCategory = ({title, image, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={image} style={styles.image}/>
            <View style={styles.titleWrapper}>
                <Text style={styles.date}>See All</Text>                
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardCategory

const styles = StyleSheet.create({
    title : {
        fontSize:18, fontFamily:fonts.primary[600], color:colors.text.primary,
    },
    date : {
        fontSize:14, fontFamily:fonts.primary[400], color:colors.text.secondary, marginBottom:2
    },
    image : {
        width:'100%',
        height:128,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    container : {
        marginBottom:30,
        backgroundColor:colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius:10
    },
    titleWrapper : {
        height:84,
        flex:1,
        backgroundColor:colors.white,
        padding:16,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10

    }
})
