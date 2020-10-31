import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconGoogle, IconFacebook, IlCheese } from '../../assets'

import { ButtonBig, Gap, Input, Link } from '../../component/atoms'
import { colors, fonts, showError, storeData, useForm } from '../../utils'
import { useDispatch } from 'react-redux';

const SignIn = ({navigation}) => {
    const [form, setForm] = useForm({
        email : '',
        password : '',
    })
    const [user, setUser] = useState([]);
    const dispatch = useDispatch();
    const _signIn = () =>  {
        // dispatch({type:'SET_LOADING', value:true})
        // Fire.auth().signInWithEmailAndPassword(form.email, form.password).then(res => {
        //   dispatch({type:'SET_LOADING', value:false})
        //   Fire.database().ref(`users/${res.user.uid}/`).once('value').then(resDB => {
        //     if(resDB.val())
        //     {
        //       storeData('user', resDB.val());
        //       navigation.replace('MainApp');
        //     }
        //   });
        // })
        // .catch(err => {
        //   dispatch({type:'SET_LOADING', value:false})
        //   showError(err.message);
        // })
        dispatch({type:'SET_LOADING', value:true})
        fetch('http://10.0.2.2:8000/api/login', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({email:form.email, password:form.password}),
        })        
        .then(response => response.json())
        .then((json) => {
            dispatch({type:'SET_LOADING', value:false})
            storeData('user', json.data.user); 
            storeData('isLogin', true)
            if(json.length === 0 || json.isSukses === 0)
            {
                console.log('empty')
                showError('Cannot found your credentials');
            } 
            else{
                navigation.replace('MainApp');
            }  
        })
        .catch((error) => {
            dispatch({type:'SET_LOADING', value:false})
            showError(error.message);
        })
    }

    return (
        <View style={styles.page}>
        <View style={styles.content}>
            <Gap height={178}/>
            <View style={styles.welcome}>
                <Text style={styles.subTitle}>Login</Text>            
                <Text style={styles.description}>Enter your credentials to continue</Text>
            </View>
            <Gap height={78}/>
            <Input label='Email' value={form.email} onChangeText={value => setForm('email', value)}/>
            <Gap height={16}/> 
            <Input label='Password' value={form.password} onChangeText={value => setForm('password', value)} secureTextEntry/>
            <Gap height={34}/>
            <View style={styles.social}>
                <View style={styles.icons}>
                    <IconFacebook/>
                </View>
                <View style={styles.icons}>
                    <IconGoogle/>
                </View>                
            </View>
            <Gap height={68}/>
            <View style={styles.text}>
                <ButtonBig title='Log In' onPress={_signIn} />
                <Gap height={16}/>
                <View style={styles.signIn}>
                    <Text style={styles.description}>Don't have account ? </Text> 
                    <Link title='Sign Up' onPress={()=>navigation.navigate('SignUp')}/>
                </View>
            </View>
        </View>
    </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    content : {
        paddingHorizontal:28,
    },
    text : {
        alignItems:'center'
    },
    page : {
        flex:1,
        backgroundColor:colors.white
    },
    title : {
        fontFamily:fonts.primary[400],
        fontSize:38,
        color:colors.text.primary,
        letterSpacing:10
    },
    subTitle : {
        fontFamily:fonts.primary[600],
        fontSize:18,
        marginTop:-10,
        color:colors.text.primary,
    },
    description : {
        fontFamily:fonts.primary[400],
        fontSize:14,
        color:colors.text.secondary,
    },
    icons : {
        borderWidth:1,
        borderColor:colors.border,
        width:38,
        height:38,
        borderRadius:38/2,
        alignItems:'center',
        justifyContent:'center',
        marginRight:16
    },
    social : {
        flexDirection:'row'
    },
    signIn : {
        flexDirection : 'row'
    }
})
