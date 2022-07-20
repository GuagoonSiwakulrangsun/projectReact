import { StyleSheet ,View, Text } from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'
import LostOfGreetings from './components/LostOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassword from './components/UserNameandPassword'
import UserNamePassword from './components/UserNamePassword'

const App = () => {
  return (
    <View>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LostOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNameandPassword/> */}
      <UserNamePassword/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})