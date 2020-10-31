import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum, ILCatPsikiater, ILCatObat, IlPill } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FloatCart = ({category, onPress, title, subtitle}) => {
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
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon/>
            <View style={styles.wrapper}>
                <Text style={styles.label}>{title}</Text>
                <Text style={styles.subLabel}>{subtitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FloatCart

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        borderRadius:10,
        width:'100%',
        padding:16,
        alignItems:'center',
        height:60,
        backgroundColor:colors.violet
    },
    illustration : {
    }, 
    label : {
        fontSize:16 , 
        fontFamily:fonts.primary[600],
        color:colors.white, 
    },
    subLabel : {
        fontSize:12, 
        fontFamily:fonts.primary[400],
        color:colors.white
    },
    wrapper : {
        marginLeft:16
    }
})
