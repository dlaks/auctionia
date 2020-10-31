import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'
import { DummyUser2 } from '../../../assets'

const DarkProfile = ({onPress, title, type, photo, desc, search}) => {
    if (search)
    {
        return (
            <View style={styles.container}>
                <Button type="icon-only" icon="back-light" desc={desc} onPress={onPress}/>
                <View style={styles.content}>
                    <Text style={styles.name}>{title}</Text>
                    <Text style={styles.desc}>{desc}</Text>
                </View>
                <Image style={styles.avatar} source={photo}/>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light" desc={desc} onPress={onPress}/>
            <View style={styles.content}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            <Image style={styles.avatar} source={photo}/>
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container : {
        backgroundColor:colors.header,
        paddingVertical:30,
        paddingHorizontal:20,
        paddingRight:16,
        flexDirection:'row',
        alignItems:'center'
    },
    content : {
        flex:1
    },
    avatar : {
        width:46,
        height: 46,
        borderRadius: 46/2
    },
    name : {
        fontSize:20, 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        textAlign:'center'
    },
    desc: {
        fontSize:14, 
        fontFamily:fonts.primary[400],
        color:colors.text.primary, 
        marginTop:6,
        textAlign: 'center',
        textTransform: 'capitalize'
    }
})
