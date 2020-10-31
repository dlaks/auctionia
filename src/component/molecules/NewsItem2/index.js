import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'

const NewsItem2 = ({title, date, image}) => {
    return (
        <View style={styles.container}>
             <Image source={{uri : image}} style={styles.image}/>
            <View style={styles.titleWrapper}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

export default NewsItem2

const styles = StyleSheet.create({
    title : {
        fontSize:16, fontFamily:fonts.primary[600], color:colors.text.primary,
        maxWidth:'90%'
    },
    date : {
        fontSize:12, fontFamily:fonts.primary[400], color:colors.text.secondary, marginTop:14
    },
    image : {
        width:'100%',
        height:180,
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    container : {
        marginBottom:30,
        paddingBottom:12,
        backgroundColor:colors.white,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    titleWrapper : {
        flex:1,
        padding:10
    }
})
