import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stysheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View>
  )
}

export default Stysheet

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#C9A6B1"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#B48896",
      borderRadius: 6,
      backgroundColor: "#F1BEE4",
      color: "white",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });