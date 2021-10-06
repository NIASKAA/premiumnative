import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const MasterGradeListText = ({masterGrades}) => {
    const navigation = useNavigation()

    return (
        <>
            {masterGrades.map((masterGrade) => (
                <ListItem masterGrade={masterGrade} key={masterGrade.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('MasterGradeInfoView', masterGrade)}>
                        <Text>{masterGrade.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default MasterGradeListText
