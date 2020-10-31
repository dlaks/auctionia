import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { Header, Comment, InputChat } from '../../component';
import { colors, getData, useForm } from '../../utils';
import Pusher from 'pusher-js/react-native';

const Comments = ({route, navigation}) => {
    const [user, setUser] = useState([]);
    const [comments, setComments] = useState([]);
    const items = route.params;
    const [form, setForm] = useForm({
        comment : '',
    })
    
    useEffect (() => {
        const pusher = new Pusher('337d7c9e0f60a1cbc245', {
            cluster: 'ap1'
        });
        const channel = pusher.subscribe('comment-post');
        channel.bind('comment-pusher', function(data) {
            getComments()
            console.log('event trigger')
        });
    }, [])

    const getComments = () => {
        fetch('http://10.0.2.2:8000/api/comments/indexCommentPerItem', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({items_id:items.id})
        })        
        .then(response => response.json())
        .then((json) => {
            setComments(json)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

    useEffect (() => {
        getDataUserFromLocal()
    }, [user.id]);

    const getDataUserFromLocal = () => {
        getData('user').then(async res => {
            const result  = await setUser(res);
            getComments();
        })
    }  

    const _storeComment = () => {
        fetch('http://10.0.2.2:8000/api/comments/store', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({items_id:items.id, users_id:user.id, comment:form.comment})
        })        
        .then(response => response.json())
        .then((json) => {

        })
        .catch((error) => {
        console.error('Error:', error);
        })
    }

    return (
        <View style={styles.page}>
            <Header title='Comment' type='dark' onPress={()=>navigation.goBack()}/>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={styles.content}>
                {
                    comments.map(item => {
                        return(
                            <Comment key={item.id} name={item.name} desc={item.comment} photo={item.picture}/>
                        )
                    })
                }
                </View>
            </ScrollView>
            <InputChat value={form.comment} placeholder='Add comment...' onChangeText={value => setForm('comment', value)} image={user.image} onButtonPress={_storeComment} photo={user.picture}/>
        </View>
    )
}

export default Comments

const styles = StyleSheet.create({
    page : {
        flex:1,
        backgroundColor:colors.white
    },
    content : {
        flex:1
    }
})
