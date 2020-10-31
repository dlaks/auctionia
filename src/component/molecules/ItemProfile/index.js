import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors, fonts, getData } from '../../../utils';
import { IconStar } from '../../../assets';
import { Gap } from '../../../component';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ItemProfile = ({onPress, photo, fullName, profession, desc}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={photo} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>{fullName}</Text>
                <Text  style={styles.profession}>{profession}</Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
                <Gap width={3}/>
                <Text style={styles.number}>5</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemProfile

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        flex:1,
        borderWidth:1,
        borderColor:colors.border,
        padding:11,
        borderRadius:20,
        justifyContent : 'space-between',
    },
    profile : {
        flex:1
    },
    avatar : {
        width:46, height:46, borderRadius:46/2, marginRight:12
    },
    name : {
        fontSize:16, 
        fontFamily:fonts.primary[600], 
        color:colors.text.primary
    },
    profession : {
        fontFamily:fonts.primary[400],
        fontSize:12,
        marginTop:2,
        color:colors.text.secondary
    },
    rate : {
        alignItems:'center',
        flexDirection:'row',
        marginRight:10
    },  
    number : {
        fontSize:16,
        fontWeight:'bold'
    },
})
