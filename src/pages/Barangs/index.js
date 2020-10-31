import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput} from 'react-native'
import { Header, Input, Gap, CardItemBarangs, InputSearch} from '../../component'
import { colors, getData, fonts} from '../../utils'
import _ from 'lodash'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const Barangs = ({navigation, route}) => {
    const [user, setUser] = useState([]);
    const [barang, setBarangs] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const category = route.params;

    useEffect (() => {
        getDataUserFromLocal();
        if(user.id)
        {
            fetch('http://10.0.2.2:8000/api/getItems', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({category_id:category.id, users_id:user.id})
            })        
            .then(response => response.json())
            .then((json) => {
                if(json.data.item)
                {
                    setBarangs(json.data.item)
                }
            })
            .catch((error) => {
            console.error('Error:', error);
            })
        }

    }, [user.id, category.id]);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        })
    }  

    const favourite = (itemFavourite) => {
        fetch('http://10.0.2.2:8000/api/favourites/store', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({users_id:user.id, items_id:itemFavourite}),
        })        
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            const arr = barang.map((item, index) => {
                if(itemFavourite == item.id)
                {
                    item.favourited = !item.favourited;                
                }
                return {...item}
            })
            setBarangs(arr)
        })
        .catch((error) => {
            console.error('Error:', error);
        })        
    }

    const filteredData = barang.filter((item) => {
        return item.name.toLowerCase().indexOf(searchKey) >= 0
    })

    return (
        <View style={styles.page}>
            <Header type='no-back' title='Items' onPressTransaction={() => navigation.navigate('Transactions')} onPress={() => navigation.goBack()} />
            <View style={styles.content}>       
                    <InputSearch style={styles.search} placeholder='Search' 
                            onChangeText={value => {
                            setSearchKey(value)}
                    }/>
                    <Gap height={38}/>

                    {
                        filteredData.map(items => {
                            const isFav = items.favourited === true
                            return (
                                <CardItemBarangs
                                    key={items.id}
                                    title={items.name}
                                    subtitle={items.price}
                                    image={items.picture}
                                    isFav={isFav}
                                    onPressFavourite={() => favourite(items.id)}
                                    onPressDetails={() => navigation.navigate('ItemDetails', items)}
                                />
                            )
                        })
                    }
            </View>
        </View>
    )
}

export default Barangs

const styles = StyleSheet.create({
    page : {
        backgroundColor:colors.white, flex:1
    },
    tags : {
        flexDirection:'row',
    },
    content: {
        flex:1,
        backgroundColor:colors.white,
        paddingHorizontal:16
    },
    wrapperSection: {
        paddingHorizontal:16,
        position:'absolute',
        bottom:22,
        right:1,
        left:1
    },
    wrapperSectionBarang: {
        paddingHorizontal:22
    },
    container : {
        paddingHorizontal:16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    },
    bigContainer : {
        flexDirection: 'row',
        alignItems:'center'
    },
    inputText : {
        marginLeft:20,
        flex:1,
        fontSize:18,
        fontFamily:fonts.primary[800],
        color: colors.black,
        textTransform : 'capitalize'
    },
    sectionLabel : {
        fontSize:16,
        fontFamily:fonts.primary[700], 
        color:colors.text.primary,
        marginBottom:18
    },
})
