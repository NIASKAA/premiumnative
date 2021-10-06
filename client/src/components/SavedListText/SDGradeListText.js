import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const SDGradeListText = ({SDGrades}) => {
    const navigation = useNavigation()

    return (
        <>
            {SDGrades.map((SDGrade) => (
                <ListItem SDGrade={SDGrade} key={SDGrade.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('SDGradeInfoView', SDGrade)}>
                        <Text>{SDGrade.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default SDGradeListText
