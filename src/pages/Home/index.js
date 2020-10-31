import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Image, Text, View} from 'react-native'
import { Header, CardItemObat, CardObat, Input, Button, FloatCart, Gap, Tags, CardCategory} from '../../component'
import { colors, getData, storeData, setDateChat, getChatTime, fonts, showError } from '../../utils'
// import { Fire } from '../../config'
import _ from 'lodash'
import { IlBlodtest, ILGetStarted, IlHomeBackground } from '../../assets'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import PushNotification from 'react-native-push-notification'

const Home = ({navigation}) => {
    const [user, setUser] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect (() => {
        getDataUserFromLocal();
        console.log(user)
        if(user)
        {
            fetch('http://10.0.2.2:8000/api/category', {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
              })
            .then(response => response.json())
            .then((json) => {
                if(json)
                {
                    setCategory(json)
                    console.log(category)
                }
            })
            .catch((error) => {
            console.error('Error:', error);
            })
        }
    }, [user.id]);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        })
    }  

    return (
        <View style={styles.page}>
            <ImageBackground source={IlHomeBackground} style={styles.background}>
                <Text style={styles.title}>Auctionia</Text>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <View>          
                    {
                        category.map(item => {
                            return (
                                <CardCategory
                                    key = {item.id}
                                    title={item.name} 
                                    image={{uri : item.picture}}
                                    onPress={() => navigation.navigate('Barangs', item)} 
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    scroll: {
        backgroundColor:colors.white, 
        flex:1, 
        marginTop:-320,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingHorizontal:16,
        paddingTop:24
    },
    page : {
        backgroundColor:colors.tabBar, flex:1
    },
    background : {
        height:414,
        padding:28
    },
    title : {
        fontSize:24, fontFamily:fonts.primary[600], color:colors.white
    }, 
    desc : {
        fontSize:14,
        fontFamily:fonts.primary[300],
        color:colors.white,
        textAlign:'center',
        marginTop:6,
        color:colors.text.subTitle
    }
})
