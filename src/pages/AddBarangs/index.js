import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Modal, TouchableHighlight, Picker} from 'react-native'
import { Gap, Input, Button } from '../../component'
import { colors, fonts, useForm } from '../../utils'

const AddBarangs = () => {

    const [category, setCategory] = useState([]);
    const [pickerDisplayed, setPickerDisplayed] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const [form, setForm] = useForm({
        name : '',
        price : '',
    })

    const [pickerValues , setPickerValues] = useState([])

    
    useEffect (() => {
        // getDataUserFromLocal();
        fetch('http://10.0.2.2:8000/api/category', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          })
        .then(response => response.json())
        .then((json) => {
            setCategory(json)
        })
        .catch((error) => {
        console.error('Error:', error);
        })
    }, []);

    const addBarang = () => {
        fetch('http://10.0.2.2:8000/api/addBarang', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({name:form.name, price:form.price, category_id:selectedValue}),
        })        
        .then(response => response.json())
        .then((json) => {
            console.log(json)
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }

    const setPickerValue = (newValue) => {
        setCategory(newValue)
    
        togglePicker();
      }

    const togglePicker = () => {
        setPickerDisplayed(!pickerDisplayed)
    }

    return (
        <View style={styles.page}> 
            <View style={styles.content}>
                <Gap height={88} />
                <Input label='Name' value={form.name} onChangeText={value => setForm('name', value)}/>
                <Gap height={16}/>
                <Input label='Price' value={form.price} onChangeText={value => setForm('price', value)} />
                <Gap height={16}/>
                <Input label='Unit' value={form.unit} onChangeText={value => setForm('unit', value)}/>
                <Gap height={16}/>
                <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                    {
                        category.map((item, index) => {
                            return <Picker.Item key={item} style={styles.picker} label={item.name} value={item.id} />
                        })
                    }
                </Picker>
                </View>
                <Gap height={48}/>

                <Button title='Add' onPress={addBarang}/>
                <Gap height={16}/>
                <Button title='Cancel' type='secondary'/>
            </View>
        </View>
    )
}

export default AddBarangs

const styles = StyleSheet.create({
    page : {
        flex:1        
    },
    content: {
        paddingHorizontal:16
    },
    picker : {
        fontFamily:fonts.primary[800],
        fontSize:50,
        borderBottomColor:colors.border,
        borderBottomWidth:1
    }
})
