import React from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const MasterGradeCards = ({masterGrade}) => {
    return (
        <Card masterGrade={masterGrade} key={masterGrade.id}>
            <CardItem cardBody>
                <FastImage source={{uri: masterGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{masterGrade.gunplaName}</Text>
                    <Text>{masterGrade.series}</Text>
                    <Text>{masterGrade.releaseDate}</Text>
                    <Text>{masterGrade.price}</Text>
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

export default MasterGradeCards
