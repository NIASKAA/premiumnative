import React from 'react'
import {Content, Text, H5} from 'native-base'
import {View, StyleSheet} from 'react-native'

const UpdateView = () => {
    return (
        <Content style={styles.content}>
            <H5 style={styles.updateTitle}>Version 1.0</H5>
            <View>
                <Text style={styles.updateText}>Launch App</Text>
            </View>
        </Content>
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
