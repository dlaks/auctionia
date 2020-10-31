import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser3, IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profile = ({name, profession, isRemove, photo, onPress}) => {

    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.avatar} />
                    {
                        isRemove && <IconRemovePhoto style={styles.removePhoto}/>
                    }                
                </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                    <Image source={photo} style={styles.avatar} />
                    {
                        isRemove && <IconRemovePhoto style={styles.removePhoto}/>
                    }                
                </TouchableOpacity>
            )}
            {name && (
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
            )}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    avatar : {
        width :100,
        height:100,
        borderRadius:100/2
    },
    borderProfile : {
        padding:5,
        borderRadius : 110/2, 
        borderWidth : 1, 
        borderColor:colors.border,
        justifyContent : 'center',
        alignItems : 'center'
    },
    container : {
        justifyContent : 'center', alignItems : 'center'
    },
    name : {
        fontSize:20,
        fontFamily:fonts.primary[600],
        color: colors.text.primary,
        marginTop:16,
        textAlign:'center'
    },
    profession : {
        fontSize:14,
        fontFamily:fonts.primary[400],
        color:colors.text.secondary,
        marginTop:2,
        textAlign:'center'
    },
    removePhoto : {
        position:'absolute',
        right:2,
        bottom:2
    }
})
