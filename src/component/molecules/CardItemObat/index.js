import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum, ILCatPsikiater, ILCatObat, IconFavouriteActive, IconFavourite, IlPill } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { ButtonSmall } from '../../../component'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Card = ({category, onPress, title, subtitle, price, onPressFavourite, isFav}) => {
    const Icon = () => {
        if (category === 'dokter umum')
        {
            return <ILCatUmum style={styles.illustration}/>;
        }
        if (category === 'psikiater')
        {
            return <ILCatPsikiater style={styles.illustration}/>;
        }
        if(category === 'dokter obat')
        {
            return <IlPill style={styles.illustration}/>;
        }
        return <ILCatUmum style={styles.illustration}/>;
    }

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
    return (
        <View style={styles.container}>
            <View style={styles.wrapperIcon}>
            <Icon/>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>{subtitle}</Text>
                <Text style={styles.subLabel}>{title}</Text>
                <Text style={styles.price}>{price}</Text>    
            </View>
            <View style={styles.wrapper2}>
                <TouchableOpacity onPress={onPressFavourite}>
                <Fav style={styles.fav}/>
                </TouchableOpacity>
                <Text></Text>
                <ButtonSmall onPress={onPress} title='Tambah' />         
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf:'flex-start',
        borderRadius:20,
        height:100,
        justifyContent:'center',
        width:'100%',
        padding:14,
        marginBottom:16,
        backgroundColor:'white',
    },
    illustration : {
        justifyContent:'flex-end'
    }, 
    label : {
        fontSize:16, 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
    },
    price : {
        fontSize:14 , 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
    },
    subLabel : {
        fontSize:14, 
        fontFamily:fonts.primary[400],
        color:colors.text.secondary,
    },
    wrapperIcon : {
        justifyContent:'center'
        // borderBottomColor:colors.border,
        // borderBottomWidth:1
    },
    fav : {
        justifyContent:'flex-start'
    },
    wrapper : {
        marginLeft:16,
        flex:1,
        justifyContent:'center',
        borderBottomColor:colors.border,
    },
    wrapper2 : {   
        alignItems:'flex-end', 
        justifyContent:'center',
        borderBottomColor:colors.border,
    }
})
