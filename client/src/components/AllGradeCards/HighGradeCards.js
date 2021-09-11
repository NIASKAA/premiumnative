import React from 'react'
import {Pressable, Image, StyleSheet} from 'react-native'
import {Card, CardItem, Text, Body} from 'native-base'

const HighGradeCards = ({highGrades}) => {
    return (
        <>
            {highGrades.map((highGrade) => (
                <Card highGrade={highGrade} key={highGrade.id}>
                    <CardItem cardBody>
                        <Image source={{uri: highGrade.image}} style={styles.grades}/>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{highGrade.gunplaName}</Text>
                            <Text>{highGrade.series}</Text>
                            <Text>{highGrade.releaseDate}</Text>
                            <Text>{highGrade.price}</Text>
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

export default HighGradeCards
