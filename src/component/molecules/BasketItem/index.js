import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum, ILCatPsikiater, IlPill } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { ButtonSmall, ButtonCart } from '../../../component'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BasketItem = ({category, onPress, title, subtitle, price, onPressAdd, onPressRemove, quantity}) => {
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
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <Icon/>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.label}>{subtitle}</Text>
                <Text style={styles.subLabel}>{title}</Text>
                <Text style={styles.label}>{price}</Text>  
            </View>
            <View style={styles.wrapper2}>
                <View>
                    <Text></Text>                     
                </View> 
                <View>
                    <Text></Text>                     
                </View> 
                <View style={{flexDirection:'row'}}>
                    <ButtonCart onPressRemove={onPressRemove} />
                    <View style={styles.viewQuantity}>
                        <Text style={styles.quantity}>{quantity}</Text>
                    </View>
                    <ButtonCart isAdd onPressAdd={onPressAdd} />
                </View>            
            </View>
        </View>
    )
}

export default BasketItem

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf:'flex-start',
        width:'100%',
        padding:18,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderColor:colors.border
    },
    iconWrapper : {
        justifyContent:'center',
        marginRight:10
    },
    label : {
        fontSize:14 , 
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        
    },
    quantity : {
        fontSize:14,
        fontFamily:fonts.primary[600]
    },
    viewQuantity : {
        paddingHorizontal:10,
        justifyContent:'center'
    },
    subLabel : {
        fontSize:14, 
        fontFamily:fonts.primary[400],
        color:colors.text.secondary,
    },
    wrapper : {
        marginLeft:16,
        flex:1
    },
    wrapper2 : {
        marginLeft:16,  
        flex:1 ,
        alignItems:'flex-end'     
    }
})
