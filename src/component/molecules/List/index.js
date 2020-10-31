import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const List = ({profile, name, desc, type, onPress, icon, clickable, photo}) => {
    if(clickable)
    {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={styles.avaView}>
                    <Image source={{uri : photo}} style={styles.avatar}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.message}>{desc}</Text>
                </View>    
                <Text style={styles.textStatus(type)}>{type}</Text>
            </TouchableOpacity>
        )
    }
    else 
    {
        return (
            <View style={styles.container} onPress={onPress}>
                <View style={styles.avaView}>
                    <Image source={{uri : photo}} style={styles.avatar}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.message}>{desc}</Text>
                </View>    
                <View style={styles.status(type)}>
                       <Text style={styles.textStatus(type)}>{type}</Text>
                </View>
            </View>
        ) 
    }
}

export default List

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
        paddingBottom:18, 
        marginBottom:18, 
        borderBottomColor:colors.border, 
        borderBottomWidth:1, 
        justifyContent:'space-between', 
        alignItems:'center',
        paddingHorizontal:16
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
    content : {
        flex:1,
        marginLeft:16,
    },
    status : type => ({
        paddingHorizontal:5,
        paddingVertical:6,
        backgroundColor: type === 'accept' ? '#DFFFE2' : '#FFE6E6',
        width:'20%',
        borderRadius:10,
        alignItems:'center'
    }),
    textStatus : type => ({
        color : type === 'accept' ? '#00D108' : '#EC0101'
    })
})
