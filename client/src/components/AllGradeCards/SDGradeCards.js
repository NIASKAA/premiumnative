import React from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const SDGradeCards = ({SDGrades}) => {
    return (
        <>
            {SDGrades.map((SDGrade) => (
                <Card SDGrade={SDGrade} key={SDGrade.id}>
                    <CardItem cardBody>
                        <FastImage source={{uri: SDGrade.image}} style={styles.grades}/>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{SDGrade.gunplaName}</Text>
                            <Text>{SDGrade.series}</Text>
                            <Text>{SDGrade.releaseDate}</Text>
                            <Text>{SDGrade.price}</Text>
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

export default SDGradeCards
