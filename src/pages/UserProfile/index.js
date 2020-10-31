import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile, ListArrow, Gap } from '../../component'
import { colors, getData, storeData } from '../../utils'

const UserProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        name:'',
        email:'',
        profession:'',
        picture:''
    })

    useEffect(()=> {
        getData('user').then(res=> {
            const data = res;
            setProfile(res);
        })
    }, []);

    const signOut = () => {
        storeData('user', null).then(res => {
            storeData('isLogin', false).then(res => {
                navigation.replace('GetStarted')
            })
        })
    }

    return (
        <View style={styles.page}>
            <Gap height={30}/>
            {profile.name.length > 0 && (<Profile name={profile.name} profession={profile.email} photo={{ uri : profile.picture}}/>)}
            <Gap height={14}/>
            <ListArrow name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')} />
            <ListArrow name="Etalase" desc="Last Update Yesterday" type="next" icon="help" onPress={() => navigation.navigate('Etalase')} />
            <ListArrow name="Sign Out" desc="Click to Sign Out" type="next" icon="help" onPress={signOut}/>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page : {
        backgroundColor:colors.white,
        flex:1
    }
})
