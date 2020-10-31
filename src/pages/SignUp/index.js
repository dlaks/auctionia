import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconGoogle, IconFacebook, IlCheese } from '../../assets'

import { ButtonBig, Gap, Input, Link } from '../../component/atoms'
import { colors, fonts, useForm } from '../../utils'

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name : '',
        address : '',
        email : '',
        password : ''
    })

    const onContinue = () =>  {
        fetch('http://10.0.2.2:8000/api/register', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({name:form.name, address:form.address, email:form.email, password:form.password}),
        })        
        .then(response => response.json())
        .then((json) => {
            navigation.navigate('UploadPhoto', form)
        })
        .catch((error) => {
        console.error('Error:', error);
        })
    }

    return (
        <View style={styles.page}>
        <View style={styles.content}>
            <Gap height={88}/>
            <View style={styles.welcome}>
                <Text style={styles.subTitle}>Sign Up</Text>            
                <Text style={styles.description}>Enter your credentials to continue</Text>
            </View>
            <Gap height={68}/>
            <Input label='Name' value={form.name} onChangeText={value => setForm('name', value)}/>
            <Gap height={24}/> 
            <Input label='Email' value={form.email} onChangeText={value => setForm('email', value)}/>
            <Gap height={24}/> 
            <Input label='Password' value={form.password} onChangeText={value => setForm('password', value)} secureTextEntry />
            <Gap height={24}/> 
            <Input label='Address' value={form.address} onChangeText={value => setForm('address', value)}/> 
            <Gap height={68}/>
            <View style={styles.text}>
                <ButtonBig title='Sign Up' onPress={onContinue} />
            </View>
        </View>
    </View>
    )
}

export default SignUp

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
