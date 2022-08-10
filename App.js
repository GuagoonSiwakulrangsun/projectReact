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
import AlertComponent from './components/AlertComponent'
import ImageWithTextInput from './components/ImageWithTextInput'
import ButtonExample from './components/ButtonExample'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'
import DynamicStyle from './components/DynamicStyle'
import ModalExample from './components/ModalExample'
import ModalPractice from './components/ModalPractice'

const App = () => {
  return (
    <View  style={styles.container}>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LostOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      <Count/>
      {/* <InputText/> */}
      {/* <UserNameandPassword/> */}
      {/* <UserNamePassword/> */}
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      {/* <TouchablePractice/> */}
      {/* <DynamicStyle/> */}
      {/* <ModalExample/> */}
      {/* <ModalPractice/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})