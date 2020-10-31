import React, { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { IconBid, IconChat, IconBookmark } from '../../assets'
import { Button, Gap, Header, HomeProfile, Input } from '../../component'
import { colors, fonts, getData, useForm } from '../../utils'

const ItemDetails = ({navigation, route}) => {
    const items = route.params;
    const[user, setUser] = useState([]);
    const [form, setForm] = useForm({
        bid_amount : '',
    })

    useEffect(()=> {
        getDataUserFromLocal();
        console.log(items)
    }, [user.id])

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        })
    }  

    return (
        <View style={styles.page}>
            <ImageBackground source={{uri : items.picture}} style={styles.background}>
                <Button type='icon-only' icon='back-light' onPress={() => navigation.goBack()} />
            </ImageBackground>
            <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={24}/>
                    {/* <Text style={styles.title}>{items.name}</Text> */}
                    <Text style={styles.title}>{items.name}</Text>
                    <Text style={styles.desc}>{items.desc}</Text>
                    <Gap height={24}/>
                    <HomeProfile name={items.username} photo={{uri : items.user_picture}} profession={items.profession}/>
                    <Gap height={60}/>
                    <View style={styles.iconGroup}>
                        <TouchableOpacity style={styles.iconTextGroup} onPress={() => navigation.navigate('Bid', items)}>
                            <View style={styles.icon}>
                                <IconBid/>
                            </View>
                            <Text style={styles.iconText}>Bid</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconTextGroup} onPress={() => navigation.navigate('Comments', items)}>
                            <View style={styles.icon}>
                                <IconChat/>
                            </View>
                            <Text style={styles.iconText}>Comments</Text>
                        </TouchableOpacity>
                        <View style={styles.iconTextGroup}>
                        <View style={styles.icon}>
                            <IconBookmark/>
                        </View>
                        <Text style={styles.iconText}>Comments</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ItemDetails

const styles = StyleSheet.create({
    page: {
        backgroundColor:colors.white, flex:1
    },
    background : {
        height:300,
        padding:28
    },
    content : {
        paddingHorizontal:16
    },
    title : {
        fontFamily:fonts.primary[700],
        color:colors.text.primary,
        fontSize:20
    },
    desc : {
        fontFamily:fonts.primary[600],
        color:colors.text.secondary,
        fontSize:14
    },
    price : {
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        fontSize:14
    },
    iconGroup : {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16
    },
    icon : {
        borderWidth : 1,
        alignItems:'center',
        justifyContent:'center',
        width:48,
        height:48,
        borderRadius : 48/2,
        borderColor : colors.border
    },
    iconTextGroup : {
        alignItems : 'center'
    },
    iconText : {
        marginTop:10,
        fontFamily : fonts.primary[600],
        color:colors.text.secondary
    }
})
