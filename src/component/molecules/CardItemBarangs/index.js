import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconFavourite, IconFavouriteActive } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { ButtonSmall, Gap } from '../../atoms'

const CardItemBarangs = ({title, subtitle, image, isFav, onPressFavourite, onPressDetails, type}) => {
    const Fav = () => {
        if(isFav)
        {
            return <IconFavouriteActive/>
        }
        if(!isFav)
        {
            return <IconFavourite/>
        }
    }
    if(type === 'etalase')
    {
        return (
        
            <View style={styles.content}>
                <Image source={{uri : image}} style={styles.image}/>
                <View style={styles.desc}>
                    <Text style={styles.title}>{title}</Text>
                    <Gap height={10}/>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <View style={styles.wrapper2}>
                    <View style={styles.buttonSmall}>
                        <ButtonSmall title='Details' onPress={onPressDetails}/>
                    </View>
                </View>
            </View>
        )
    }
    return (
        
        <View style={styles.content}>
            <Image source={{uri : image}} style={styles.image}/>
            <View style={styles.desc}>
                <Text style={styles.title}>{title}</Text>
                <Gap height={10}/>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.wrapper2}>
                <TouchableOpacity onPress={onPressFavourite}>
                    <Fav style={styles.fav}/>
                </TouchableOpacity>
                <View style={styles.buttonSmall}>
                    <ButtonSmall title='Details' onPress={onPressDetails}/>
                </View>
            </View>
        </View>
    )
}

export default CardItemBarangs

const styles = StyleSheet.create({
    content : {
        backgroundColor:colors.white,
        flexDirection:'row',
        marginBottom:28
    },
    desc: {
        flex:1,
        justifyContent:'center'
    },
    fav : {
        justifyContent:'flex-start'
    },
    title : {
        fontFamily:fonts.primary[600],
        fontSize:16
    },
    subtitle : {
        fontFamily:fonts.primary[600],
        fontSize:14,
        color:colors.text.secondary
    },
    image : {
        width:80,
        height:80,
        borderRadius:5,
        marginRight:28
    },
    wrapper2 : {   
        alignItems:'flex-end', 
        justifyContent:'space-between',
    }
})
