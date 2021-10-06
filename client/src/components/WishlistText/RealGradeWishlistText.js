import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const RealGradeWishlistText = ({realGrades}) => {
    const navigation = useNavigation()

    return (
        <>
            {realGrades.map((realGrade) => (
                <ListItem realGrade={realGrade} key={realGrade.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('RealGradeInfoView', realGrade)}>
                        <Text>{realGrade.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default RealGradeWishlistText
