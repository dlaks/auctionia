import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyHospital } from '../../../assets'
import { fonts, colors } from '../../../utils'

const ListHospital = ({type, name, alamat, pic}) => {
    return (
        <View style={styles.content}>
            <Image source={pic} style={styles.picture} />
            <View style={styles.descWrapper}>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.alamat}>{alamat}</Text>
            </View>
        </View>
    )
}

export default ListHospital

const styles = StyleSheet.create({
    title : {
        fontSize:16, fontFamily:fonts.primary[600], color:colors.text.primary
    },
    alamat : {
        fontSize:12, fontFamily:fonts.primary[300], color:colors.text.secondary,
        marginTop:6
    },
    content : {
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border
    },
    picture : {
        width:80,
        height:60,
        borderRadius:11,
        marginRight:16
    }
})
