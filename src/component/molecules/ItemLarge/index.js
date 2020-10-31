import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'
import { color } from 'react-native-reanimated'

const ItemLarge = ({title, date, image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

export default ItemLarge

const styles = StyleSheet.create({
    title : {
        fontSize:16, fontFamily:fonts.primary[600], color:colors.text.primary,
        maxWidth:'100%'
    },
    date : {
        fontSize:12, fontFamily:fonts.primary[400], color:colors.text.secondary, marginTop:14
    },
    image : {
        width:80,
        height:60,
        borderRadius:11
    },
    container : {
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor: colors.border,
        paddingBottom:12,
        paddingTop:16,
        paddingHorizontal:16,
        backgroundColor:colors.white
    },
    titleWrapper : {
        flex:1,
        marginLeft:20
    }
})
