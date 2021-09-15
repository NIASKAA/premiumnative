import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const HighGradeListText = ({highGrades}) => {
    const navigation = useNavigation();

    return (
        <>
            {highGrades.map((highGrade) => (
                <ListItem highGrade={highGrade}>
                    <TouchableOpacity onPress={() => navigation.navigate('MoreInfoView', highGrade)}>
                        <Text key={highGrade.id}>{highGrade.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default HighGradeListText
