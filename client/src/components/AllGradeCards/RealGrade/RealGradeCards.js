import React from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const RealGradeCards = ({realGrade}) => {
    return (
        <Card realGrade={realGrade} key={realGrade.id}>
            <CardItem cardBody>
                <FastImage source={{uri: realGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{realGrade.gunplaName}</Text>
                    <Text>{realGrade.series}</Text>
                    <Text>{realGrade.releaseDate}</Text>
                    <Text>{realGrade.price}</Text>
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

export default RealGradeCards
