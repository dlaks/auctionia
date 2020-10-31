import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlCheese } from '../../assets'

import { ButtonBig, Gap } from '../../component/atoms'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Gap height={88}/>
                <View style={styles.text}>
                    <Text style={styles.title}>AUCTIONIA</Text>
                    <Text style={styles.subTitle}>Auction Planet</Text>
                    <Text style={styles.description}>Bid & Buy</Text>
                    <Gap height={68}/>
                    <IlCheese/>
                    <Gap height={68}/>
                    <ButtonBig title='Get Started' onPress={()=> navigation.navigate('SignIn')} />
                </View>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    content : {
        paddingHorizontal:28,
    },
    text : {
        alignItems:'center'
    },
    page : {
        flex:1,
        backgroundColor:colors.white
    },
    title : {
        fontFamily:fonts.primary[600],
        fontSize:38,
        color:colors.text.primary,
    },
    subTitle : {
        fontFamily:fonts.primary[600],
        fontSize:18,
        color:colors.text.primary,
    },
    description : {
        fontFamily:fonts.primary[400],
        fontSize:14,
        color:colors.text.secondary,
    },
})
