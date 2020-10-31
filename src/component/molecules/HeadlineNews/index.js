import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { fonts, colors } from '../../../utils'

const HeadlineNews = ({title, date, image}) => {
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

export default HeadlineNews

const styles = StyleSheet.create({
    title : {
        fontSize:18, fontFamily:fonts.primary[600], color:colors.text.primary,
        maxWidth:'90%'
    },
    date : {
        fontSize:12, fontFamily:fonts.primary[400], color:colors.text.secondary, marginTop:14
    },
    image : {
        width:'100%',
        height:180,
        justifyContent:'flex-start',
        borderTopRightRadius:10,
        borderTopLeftRadius:10
    },
    container : {
        paddingBottom:12,
        backgroundColor:colors.white,
        borderRadius:10
    },
    titleWrapper : {
        flex:1,
        padding:10
    }
})
