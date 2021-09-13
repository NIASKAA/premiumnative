import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Text, ListItem} from 'native-base'

const HighGradeListText = ({highGrades}) => {
    return (
        <>
            {highGrades.map((highGrade) => (
                <TouchableOpacity>
                    <ListItem highGrade={highGrade} key={highGrade.id}>
                        <Text>{highGrade.gunplaName}</Text>
                    </ListItem>
                </TouchableOpacity>
            ))}
        </>
    )
}

export default HighGradeListText
