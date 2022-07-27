import { StyleSheet, Text, View, SafeAreaView, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const ModalPractice = () => {
    const [showModal1,setShowModal1] = useState(false);
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.centeredView}>

          <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal1}
            onRequestClose={() => alert('Modal has been closed.')}
          >
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>คุณลืมปิดไฟในห้อง!!!</Text>
                    <Button
                        title='กรุณากดปุ่มเพื่อปิดไฟ'
                        onPress={() => setShowModal1(!showModal1)}
                        style= {styles.button}
                        color= '#FF61C8'
                    />
                </View>
            </View>
          </Modal>
  
          {/* Updating the state to make Modal Visible */}
          <View>
              <Text style={styles.textStyle}>ไฟในห้องปิดอยู่</Text>
                <Button
                    title='กรุณากดปุ่มเพื่อเปิดไฟอีกครั้ง'
                    onPress={() => setShowModal1(!showModal1)}
                    style={styles.button}
                    color= '#FF9661'
                />
          </View>
          
        </View>
      </SafeAreaView>
  )
}

export default ModalPractice

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 15,
    },
    modalText: {
        textAlign: 'center',
        marginBottom: 15,
    },
})