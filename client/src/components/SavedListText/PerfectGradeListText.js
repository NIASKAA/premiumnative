import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const PerfectGradeListText = ({perfectGrades}) => {
    const navigation = useNavigation()

    return (
        <>
            {perfectGrades.map((perfectGrade) => (
                <ListItem perfectGrade={perfectGrade} key={perfectGrade.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('MoreInfoView', perfectGrade)}>
                        <Text>{perfectGrade.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default PerfectGradeListText
