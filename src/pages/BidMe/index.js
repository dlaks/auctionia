import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Gap, List, Header, Input, InputChat } from '../../component';
import { colors, getData, useForm } from '../../utils';

const BidOther = ({route, navigation}) => {
    const [user, setUser] = useState([]);
    const [bid, setBid] = useState([]);

    useEffect (() => {
        getDataUserFromLocal();

    }, [user.id]);

    const getBid = () => {
        fetch('http://10.0.2.2:8000/api/bid-out/index', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({user_id:user.id})
        })        
        .then(response => response.json())
        .then((json) => {
            setBid(json)
        })
        .catch((error) => {
        console.error('Error:', error);
        })   
    }

    const getDataUserFromLocal = () => {
        getData('user').then(async res => {
            const result = await setUser(res);
            getBid();
        })
    }  

    return (
        <View style={styles.page}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={16}/>
                {
                    bid.map(item => {
                        return(
                            <List key={item.id} name={item.name} desc={item.bid_amount} type='success' photo={user.picture} />
                        )
                    })
                }
                </View>
            </ScrollView>
        </View>
    )
}

export default BidOther

const styles = StyleSheet.create({
    page : {
        flex:1,
        backgroundColor:colors.white
    },
    content : {
        flex:1
    }
})
