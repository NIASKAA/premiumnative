import React from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const PerfectGradeCards = ({perfectGrades}) => {
    return (
        <>
            {perfectGrades.map((perfectGrade) => (
                <Card perfectGrade={perfectGrade} key={perfectGrade.id}>
                    <CardItem cardBody>
                        <FastImage source={{uri: perfectGrade.image}} style={styles.grades}/>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{perfectGrade.gunplaName}</Text>
                            <Text>{perfectGrade.series}</Text>
                            <Text>{perfectGrade.releaseDate}</Text>
                            <Text>{perfectGrade.price}</Text>
                        </Body>
                    </CardItem>
                </Card>
            ))}
        </>
    )
}

const styles= StyleSheet.create({
    grades: {
        width: '100%',
        height: 200
    }
})

export default PerfectGradeCards
