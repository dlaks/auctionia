import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Gap} from '../../atoms';
import { colors, fonts } from '../../../utils'
import DarkProfile from './DarkProfile';
import { IconHistory, IconAuctionia, IconSearch, IconHeart } from '../../../assets';
import BigProfile from './BigProfile';

const Header = ({onPress, onPressTransaction, title, type, photo, desc}) => {
    if(type == 'dark-profile'){
        return <DarkProfile onPress={onPress} title={title} type={type} desc={desc} photo={photo} />;
    }
    if(type == 'big-profile'){
        return <BigProfile onPress={onPress} title={title} type={type} desc={desc} photo={photo} />;
    }
    if(type == 'no-back'){
        return (
            <View style={styles.container(type)}>
                <Button type="icon-only" icon={type === 'dark' ? 'back-dark' : 'back-light'} onPress={onPress}/>
                <IconAuctionia/>
                <IconSearch onPress={onPressTransaction}/>
        </View>
        )
    }
    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === 'dark' ? 'back-dark' : 'back-light'} onPress={onPress}/>
            <IconHeart/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : type => ({
        flexDirection: 'row',
        backgroundColor: type === 'no-back' ? colors.black : colors.white,
        paddingHorizontal: 16,
        paddingTop:26,
        paddingBottom: 15,
        marginBottom:16,
        alignItems: 'center',
        justifyContent: 'space-between'
    }),
    text : type => ({
        fontSize:24,
        fontFamily:fonts.primary[400],
        justifyContent: 'center',
        color:colors.white
    }),
    containerr : type => ({
        alignItems : 'flex-end',
        paddingHorizontal: 28,
        paddingVertical:30,
        backgroundColor: colors.grey01,
    }),
    icon : {
        marginRight:24,
        justifyContent: 'center'  
    },
})
