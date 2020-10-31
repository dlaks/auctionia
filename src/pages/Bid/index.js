import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Gap, List, Header, Input, InputChat } from '../../component';
import { colors, getData, useForm } from '../../utils';

const Bid = ({route, navigation}) => {
    const [user, setUser] = useState([]);
    const [bid, setBid] = useState([]);
    const items = route.params;
    const [form, setForm] = useForm({
        bid_amount : '',
    })
    const [refresh, setRefresh] = useState(0);

    useEffect (() => {
        getDataUserFromLocal();
        console.log(user)
        if(user.id)
        {
            fetch('http://10.0.2.2:8000/api/bid/indexBidPerItem', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({items_id:items.id})
            })        
            .then(response => response.json())
            .then((json) => {
                setBid(json)
            })
            .catch((error) => {
            console.error('Error:', error);
            })
        }

    }, [user.id, refresh]);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        })
    }  

    const _makeBid = () => {
        console.log('dbwaudua')
        fetch('http://10.0.2.2:8000/api/bid/store', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({items_id:items.id, users_id:user.id, bid_amount:form.bid_amount})
        })        
        .then(response => response.json())
        .then((json) => {
            setRefresh(!refresh);
        })
        .catch((error) => {
        console.error('Error:', error);
        })
    }

    return (
        <View style={styles.page}>
            <Header title='Bids' type='dark' onPress={()=>navigation.goBack()}/>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={styles.content}>
                {
                    bid.map(item => {
                        return(
                            <List key={item.id} name={item.username} desc={item.bid_amount} type='success' photo={user.picture} />
                        )
                    })
                }
                </View>
            </ScrollView>
            <InputChat value={form.bid_amount} placeholder='Post new bid...' onChangeText={value => setForm('bid_amount', value)} onButtonPress={_makeBid} photo={user.picture} />
        </View>
    )
}

export default Bid

const styles = StyleSheet.create({
    page : {
        flex:1,
        backgroundColor:colors.white
    },
    content : {
        flex:1
    }
})
