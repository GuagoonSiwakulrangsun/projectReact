import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'


const UserNamePassword = () => {
    const [name1, setName1] = useState('');
    const [email1, setEmail1] = useState('');
    const checkTextInput = () => {
        if(!name1.trim()){
            alert('Please Enter Name');
            return;
        }
        if (!email1.trim()) {
            alert('Please Enter Email');
            return;
            }
        else {
            alert('suscess')
        }
    }
  return (
    <View style={styles.container}>
        <TextInput
            value={name1}
            onChangeText={(name1)=>{setName1(name1)}}
            style={styles.textInputStyle}
            placeholder='Enter Name'
        />
        <TextInput
            value={email1}
            onChangeText={(email1)=>{setEmail1(email1)}}
            style={styles.textInputStyle}
            placeholder='Enter Email'
        />
        <Button
            color='orange'
            title='Submit'
            onPress={checkTextInput}   
        />
    </View>
  )
}

export default UserNamePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginBottom: 15,
        borderRadius: 3,
        fontSize:12,
    },
});