import React from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const RE100OtherCards = ({re100Other}) => {
    return (
        <Card re100Other={re100Other} key={re100Other.id}>
            <CardItem cardBody>
                <FastImage source={{uri: re100Other.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>Name: {re100Other.gunplaName}</Text>
                    <Text>Series: {re100Other.series}</Text>
                    <Text>Release Date: {re100Other.releaseDate}</Text>
                    <Text>Price: {re100Other.price}</Text>
                </Body>
            </CardItem>
        </Card>
    )
}

const styles= StyleSheet.create({
    grades: {
        width: '100%',
        height: 200
    }
})

export default RE100OtherCards
