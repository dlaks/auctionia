import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyUser3, ILNullPhoto } from '../../assets'
import { colors, fonts, getData, storeData } from '../../utils'
import { Header, Profile, Button, Input, Gap, Loading } from '../../component'
import { ScrollView } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'
import { showMessage } from 'react-native-flash-message'

const UpdateProfile = ({navigation}) => {
    const [profile, setProfile] = useState({
        name:'',
        email:'',
        profession:''
    });
    
    const[password, setPassword] = useState('');
    const[loading, setLoading] = useState(false);
    const[photo, setPhoto] = useState(ILNullPhoto);
    const[photoForDB, setPhotoForDB] = useState('');
    const[user, setUser] = useState([]);

    useEffect(() => {
        getDataUserFromLocal();
    }, []);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setProfile(res);
            setUser(res);
        })
    }  

    const update = () => {
        setLoading(true);

        if(password.length > 0)
        {
            if(password.length < 6)
            {
                showMessage({
                    message: 'Password kurang dari 6 karakter',
                    type: 'default',
                    color: 'white',
                    backgroundColor:colors.error
                })
            }
            else {
                updatePassword();
                updateProfileData();
                navigation.replace('MainApp');
            }

        }
        else 
        {
            updateProfileData();
            navigation.replace('MainApp');
        }
        
    };

    const updatePassword = () => {
        fetch('http://10.0.2.2:8000/api/users/updatePassword', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({users_id:user.id, password:profile.password}),
        })        
        .then(response => response.json())
        .then((json) => {
            console.log(json)
        })
        .catch((error) => {
        console.error('Error:', error);
        })
    }

    const updateProfileData = () => {
        console.log(user.id, profile.name)
        const data = profile;
        fetch('http://10.0.2.2:8000/api/users/update', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({users_id:user.id, name:profile.name}),
        })        
        .then(response => response.json())
        .then((json) => {
            storeData('user', data)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile, 
            [key]: value,
        });
    };

    const getImage = () => {
        ImagePicker.launchImageLibrary({quality: 0.5, maxWidth:200, maxHeight:200}, response => {
            // Same code as in above section!
            console.log('response : ', response);
            if(response.didCancel || response.error)
            {
                showMessage({
                    message:'Oops, sepertinya anda tidak memilih fotonya?',
                    type:'default',
                    backgroundColor:colors.error,
                    color:colors.white
                })
            }
            else
            {
                setPhotoForDB(`data:${response.type};base64, ${response.data}`);
                const source = {uri: response.uri};
                setPhoto(source);
            }
          })
    }

    return (
        <>
        <View style={styles.page}>
            {/* <Header title="Edit Profile" type='dark' history onPress={() => navigation.goBack()} /> */}
            <Gap height={30}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <Profile isRemove photo={{uri : user.picture}} name={user.name} profession={user.email} onPress={getImage}/>
                <Gap height={40}/>
                <Input label="Full name" value={profile.name} onChangeText={(value) => changeText('name', value)}/>
                <Gap height={24}/>
                <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)} disable/>
                <Gap height={24}/>
                <Input label="Email" value={profile.email} disable/>
                <Gap height={24}/>
                <Input label="Password" value={password} onChangeText={(value) => setPassword(value)} secureTextEntry/>
                <Gap height={40}/>
                <Button title="Save Profile" onPress={update}/>
            </View>
            </ScrollView>
        </View>
        {loading && <Loading/> }
        </>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page : {
        backgroundColor:colors.white, flex:1
    },
    content : {
        paddingHorizontal:16,
    }
})
