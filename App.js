import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const App = () => {
  const showData1 = () => {
    alert("Hello")
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Button Example</Text>
        <Button
          onPress={showData1}
          title='Click Me'
          color= 'purple'
        />
     </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});