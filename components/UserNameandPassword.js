import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const UserNameandPassword = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
 
    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText = {(email)=>{setEmail(email)}}
                style={styles.input}
                placeholder='Email'
            />
            <TextInput
                value={pass}
                onChangeText = {(pass)=>{setPass(pass)}}
                style={styles.input}
                placeholder='Password'
            />
            <Button
                color='orange'
                title='Submit'
                onPress={() => alert('email: '+email+'\n'+'password: '+pass)}   
            />
        </View>
    )
}

export default UserNameandPassword

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:20,
        paddingTop: 20,
        alignItems:'center',
    },
    input:{
        fontSize:10,
        margin: 10,
        height: 30,
        width: 300,
        padding: 15,
        backgroundColor: '#e8e8e8',
        borderRadius: 3,
    },

})