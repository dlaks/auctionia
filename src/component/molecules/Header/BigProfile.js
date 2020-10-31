import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'
import { DummyUser2 } from '../../../assets'

const BigProfile = ({onPress, title, type, photo, desc, search}) => {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-dark" desc={desc} onPress={onPress}/>
            <View style={styles.content}>
                <Text style={styles.name}>{title}</Text>
            </View>
            <Gap width={24}/>
        </View>
    )
}

export default BigProfile

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
        fontSize:16, 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        textAlign:'center'
    },
    desc: {
        fontSize:16, 
        fontFamily:fonts.primary[600],
        color:colors.text.primary, 
        marginTop:6,
        textAlign: 'center',
        textTransform: 'capitalize'
    }
})
