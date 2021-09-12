import React from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const ConvergeCards = ({converge}) => {
    return (
        <Card converge={converge} key={converge.id}>
            <CardItem cardBody>
                <FastImage source={{uri: converge.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{converge.gunplaName}</Text>
                    <Text>{converge.series}</Text>
                    <Text>{converge.releaseDate}</Text>
                    <Text>{converge.price}</Text>
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

export default ConvergeCards
