import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum, ILCatPsikiater, ILCatObat } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BuyList = ({category, onPress, title, subtitle, price, quantity}) => {
    // const Icon = () => {
    //     if (category === 'dokter umum')
    //     {
    //         return <ILCatUmum style={styles.illustration}/>;
    //     }
    //     if (category === 'psikiater')
    //     {
    //         return <ILCatPsikiater style={styles.illustration}/>;
    //     }
    //     if(category === 'dokter obat')
    //     {
    //         return <ILCatObat style={styles.illustration}/>;
    //     }
    //     return <ILCatUmum style={styles.illustration}/>;
    // }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.label}>{subtitle}</Text>
                <Text style={styles.subLabel}>{title}</Text>
            </View>
            <View style={styles.wrapper2}>
                <View>
                    <Text style={styles.label}>{price}</Text>   
                </View> 
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.quantity}>{quantity}</Text>
                </View>            
            </View>
        </View>
    )
}

export default BuyList

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf:'flex-start',
        width:'100%',
        padding:10,
        backgroundColor:'white',
    },
    quantity: {
        fontSize:14 , 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
    },
    illustration : {
    }, 
    label : {
        fontSize:14 , 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        
    },
    subLabel : {
        fontSize:14, 
        fontFamily:fonts.primary[600],
        color:colors.text.secondary,
        marginBottom:5
    },
    wrapper : {
        flex:1,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:colors.border,
    },
    wrapper2 : {
        marginLeft:16,  
        flex:1 ,
        alignItems:'flex-end',
        borderBottomWidth:1,
        paddingBottom:10,
        borderColor:colors.border, 
    }
})
