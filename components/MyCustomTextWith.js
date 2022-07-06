import { View, Text } from 'react-native'
import React from 'react'

const MyCustom = ({fName, lName}) =>{
    return(
        <View style={{alignItems: 'center'}}>
            <Text style={{color:'orange', fontWeight: 'bold', fontSize:10}}>
                Your First Name is {fName}! and Last Name is {lName}
            </Text>
        </View>
    )
};

const MyCustomTextWith = () => {
  return (
    <View style={{alignItems:'center'}}>
        <MyCustom fName='Guagoon' lName='Siwakulrangsun' />
        <MyCustom fName='Bunsita' lName='Sriponwaree'/>   
    </View>
  )
}

export default MyCustomTextWith