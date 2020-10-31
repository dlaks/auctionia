import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum, ILCatPsikiater, ILCatObat } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Gap } from '../../atoms'

const Card = ({category, onPress}) => {
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
            return <ILCatObat style={styles.illustration}/>;
        }
        return <ILCatUmum style={styles.illustration}/>;
    }
    return (
        <View style={styles.icons}>
            <TouchableOpacity style={styles.iconRow}>
                <ILCatPsikiater />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconRow}>
                <ILCatPsikiater />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconRow}>
                <ILCatPsikiater />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconRow}>
                <ILCatPsikiater />
            </TouchableOpacity>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    border : {
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        width:328
    },
    icons : {
        flexDirection:'row',
    },
    container: {
        height:140,    
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:colors.white,
        borderRadius:20
    },
    iconRow: {
        flex:1,
        alignItems:'center',
    },
    illustration : {
    }, 
    label : {
        fontSize:16 , 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,  
    },
    subLabel : {
        fontSize:12, 
        fontFamily:fonts.primary[400],
        color:colors.text.primary
    },
    wrapper : {
        width:328,
        alignContent:'flex-start',
    }
})
