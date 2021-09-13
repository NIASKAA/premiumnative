import React from 'react'
import {Text, ListItem, Pressable} from 'native-base'

const HighGradeListText = ({highGrades}) => {
    return (
        <>
            {highGrades.map((highGrade) => (
                <ListItem highGrade={highGrade} key={highGrade.id}>
                    <Text>{highGrade.gunplaName}</Text>
                </ListItem>
            ))}
        </>
    )
}

export default HighGradeListText
