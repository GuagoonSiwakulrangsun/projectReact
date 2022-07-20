import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {
    const simpleAlertHanler = () => {
        alert('Hello ! I am Simple Alert from JavaScript <3')
    }
    const twoOptionAlertHanler = () => {
        //use Alert from React Native
        Alert.alert(
            //title
            'Hello',
            //body
            'I am Two Option Alert from React Native !',
            [
                {
                    text: 'Yes',
                    onPress: ()=> alert('Yes Pressed')
                },
                {
                    text: 'No',
                    onPress: ()=> alert('No Pressed'),
                    style: 'cancel'
                }
            ],
            //Clickig out side of alert will not cancel
            { cancelable: false }
        )
    }
  return (
    <View style={styles.container}>
        <Button
        title='Simple Alert'
        onPress={simpleAlertHanler}/>
        <Button
        title='Alert with Two Options'
        onPress={twoOptionAlertHanler}/>
    </View>
  )
}

export default AlertComponent

conststyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});