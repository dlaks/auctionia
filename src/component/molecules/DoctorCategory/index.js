import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILCatUmum, ILCatPsikiater, ILCatObat, ILCatDocAll } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Gap } from '../../atoms'

const DoctorCategory = ({category, onPress}) => {
    const Icon = () => {
        if (category === 'Umum')
        {
            return <ILCatDocAll style={styles.illustration}/>;
        }
        if (category === 'psikiater')
        {
            return <ILCatPsikiater style={styles.illustration}/>;
        }
        if(category === 'dokter obat')
        {
            return <ILCatObat style={styles.illustration}/>;
        }
        return <ILCatObat style={styles.illustration}/>;
    }
    return (
        <View style={styles.containerOuter}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Icon/>
                {/* <Text style={styles.label}>Konsultasi</Text> */}

            </TouchableOpacity>
            <Gap height={10}/>
            <Text style={styles.category}>{category}</Text>
        </View>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding:17,
        backgroundColor:colors.cardLights,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    illustration : {

    }, 
    label : {
        fontSize:14, 
        fontFamily:fonts.primary[800],
        color:colors.text.primary
    },
    category : {
        fontSize:12, 
        fontFamily:fonts.primary[400],
        color:colors.text.primary
    },
    containerOuter : {
        alignItems:'center',
        margin:13,
        justifyContent:'center'
    }
})
