import { StyleSheet,
         Text,
         View,
         Button,
         SafeAreaView
} from 'react-native'
import React, { Component } from 'react'

const Separator = () => (
    <View style={styles.separator}/>
)
const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{margin: 15}}>
            <Text style={styles.title}>
                The title and onPress handler are required. It is remonnemded to
                set accessibilityLabel to help make your app usable by everyone. 
            </Text>
            <Button
                title='Press me'
                color='pink'
                onPress={() => alert('Simple Button pressed')}
            />
        </View>
        <Separator/>
        <View style={{margin: 15}}>
            <Text style={styles.title}>
                Adjust the color in a way thar look sstandaer on each platform. On iOS,
                the color prop controls the color of the text. On Android, the color
                adjusts the background color of the button.
            </Text>
            <Button
                title='Press me'
                color='lightblue'
                onPress={() => alert('Button with adjusted color pressed')}
            />
        </View>
        <Separator/>
        <View style={{margin: 15}}>
            <Text style={styles.title}>
                All interaction for the component are disabled.
            </Text>
            <Button
                title='Press me'
                disabled //Button can not press
            />
        </View>
        <Separator/>
        <View style={{margin: 15}}>
            <Text style={styles.title}>
                This layout strategy lets the title define the width of the button.
            </Text>
            <View style={styles.fixToText}>
                <Button
                    title='Left button'
                    color='#FFCB99'
                    onPress={() => alert('Left button pressed')}/>
                <Button
                    title='Right button'
                    color='#FFCB99'
                    onPress={() => alert('Right button pressed')}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default ButtonExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
        title: {
            textAlign: 'center',
            marginVertical: 8,
        },
            fixToText: {
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
            separator: {
                marginVertical: 8,
                borderBottomColor: '#737373',
                borderBottomWidth: StyleSheet.hairlineWidth,
            },
        });