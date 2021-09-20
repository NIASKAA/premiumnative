import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Content, H3, Text} from 'native-base'

const UpdateView = () => {

    return (
        <>
            <Content style={styles.content}>
                <H3 style={styles.updateTitle}>Version 1.0</H3>
                <View>
                    <Text style={styles.updateText}>Launch App</Text>
                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1
    },
    updateTitle: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        margin: 10,
    },
    updateText: {
        margin: 10
    }
})


export default UpdateView
