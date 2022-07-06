import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-web';

const InputText = () => {
    const [userName,setUserName] = useState('');
    return (
        <View style={{flex:1, marginTop:40, alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>
                Insert any text in below input
                </Text>
            <TextInput
                value={userName}
                onChangeText = {(userName)=>{setUserName(userName)}}
                style={styles.textinput}
                placeholder = 'Please input username'
            />
            <Text>{userName}</Text>
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    textinput:{
        width:350,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        color:'gray',
        backgroundColor: '#e7ea65'
    }
})