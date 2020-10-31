import React, { useState } from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { Header, Button, Link, Gap } from '../../component'
import { ILNullPhoto, IconAddPhoto, IconRemovePhoto, IlDoctor } from '../../assets'
import { colors, fonts, storeData } from '../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagePicker from 'react-native-image-picker'
import ShowMessage, { showMessage } from 'react-native-flash-message'

const UploadPhoto = ({navigation, route}) => {
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(IlDoctor);
    const [photoForDB, setPhotoForDB] = useState('');
    const {name, email, profession, id} = route.params;
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
                setHasPhoto(true);
            }
          });
    }

    const uploadAndContinue = () => {
        console.log(id)
        fetch('http://10.0.2.2:8000/api/users/editPicture', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({picture:photoForDB, email:email}),
        })        
        .then(response => response.json())
        .then((json) => {
            console.log(json)
            navigation.replace('MainApp')
            const data = route.params;
            data.picture = photoForDB;
            storeData('user', data)
        })
        .catch((error) => {
            console.error('Error:', error);
        })

    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} /> }
                    </TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.pekerjaan}>{email}</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" onPress={uploadAndContinue} disablez={!hasPhoto}/>
                    <Gap height={30}/>
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor:colors.white
    },
    avatar : {
        width:110,
        height:110,
        borderRadius:110/2
    },
    content: {
        paddingHorizontal:40, flex:1, justifyContent:'space-between', paddingBottom:64
    },
    profile : {
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    avatarWrapper : {
        width :130,
        height:130,
        borderWidth:1,
        borderColor:colors.border,
        borderRadius:130/2,
        alignItems:'center',
        justifyContent:'center'
    }, 
    addPhoto : {
        position:'absolute',
        bottom:8,
        right:6
    },
    name : {
        fontSize:24,
        color: colors.text.primary,
        fontFamily:fonts.primary[600],
        textAlign:'center'
    },
    pekerjaan : {
        fontSize:18,
        fontFamily: fonts.primary.normal,
        textAlign:'center',
        color:colors.text.secondary
    }
})
