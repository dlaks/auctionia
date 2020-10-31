import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput} from 'react-native'
import { Header, Input, Gap, CardItemBarangs, InputSearch} from '../../component'
import { colors, getData, fonts} from '../../utils'
import _ from 'lodash'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const Etalase = ({navigation, route}) => {
    const [user, setUser] = useState([]);
    const [barang, setBarangs] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [favClick, setFavClick] = useState(0);
    const [categoryBarang, setCategoryBarang] = useState([]);

    // const [categoryID, setCategoryID] = useState('');

    useEffect (() => {
        const category = route.params;
        getDataUserFromLocal();
        console.log(user)
        if(user.id)
        {
            fetch('http://10.0.2.2:8000/api/getItemsEtalase', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({users_id:user.id})
            })        
            .then(response => response.json())
            .then((json) => {
                setBarangs(json)
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

    const filteredData = barang.filter((item) => {
        return item.name.toLowerCase().indexOf(searchKey) >= 0
    })

    return (
        <View style={styles.page}>
            <Header type='no-back' title='Items' onPress={() => navigation.navigate('Transaction')} />
            <View style={styles.content}>       
                    <InputSearch style={styles.search} placeholder='Search' 
                            onChangeText={value => {
                            setSearchKey(value)}
                    }/>
                    <Gap height={38}/>

                    {
                        filteredData.map(item => {
                            return (
                                <CardItemBarangs
                                    key={item.id}
                                    title={item.name}
                                    subtitle={item.price}
                                    image={item.picture}
                                    type='etalase'
                                />
                            )
                        })
                    }
            </View>
        </View>
    )
}

export default Etalase

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
        paddingHorizontal:28
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
