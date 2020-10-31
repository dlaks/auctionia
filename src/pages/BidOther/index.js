import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, View, ScrollView, Text} from 'react-native'
import { Gap, List, Button } from '../../component';
import { colors, fonts, getData, useForm } from '../../utils';
import RBSheet from "react-native-raw-bottom-sheet";

const BidOther = ({route, navigation}) => {
    const [user, setUser] = useState([]);
    const [bid, setBid] = useState([]);

    useEffect (() => {
        getDataUserFromLocal();

    }, [user.id]);

    const getBid = () => {
        fetch('http://10.0.2.2:8000/api/bid-in/index', {
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

    const updateTransaction = (item) => {
        console.log(item);
    }

    const getDataUserFromLocal = () => {
        getData('user').then(async res => {
            const result = await setUser(res);
            getBid();
        })
    }  

    const refRBSheet = useRef();

    return (
        <View style={styles.page}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={16}/>
                {
                    bid.map(item => {
                        return(
                            <List key={item.id} name={item.name} desc={item.bid_amount} type='success' clickable={true} photo={user.picture} onPress={() => refRBSheet.current.open()} />
                        )
                    })
                }
                </View>
            </ScrollView>
            <View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(52, 52, 52, 0.8)'
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    },
                    mask: { backgroundColor: "transparent" },
                    container: { elevation: 100 }
                    }}

                >
                    <View style={styles.sheetContent}>
                        <Text style={styles.title}>Confirmation</Text>
                        <Button title="Confirm" />
                    </View>
                </RBSheet>
            </View>
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
    },
    title: {
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        fontSize:18
    },
    sheetContent: {
        paddingHorizontal:16
    }
})
