import { StyleSheet, View, Text,} from 'react-native';
import React from 'react'

const stySheet = () => {
    return (
        <View style={style.container}>
            <Text style={styles.title}>React Native</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#EBCCCC"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#AE7676",
    borderRadius: 6,
    backgroundColor: "#FFBCF3",
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }

});

export default styles;
