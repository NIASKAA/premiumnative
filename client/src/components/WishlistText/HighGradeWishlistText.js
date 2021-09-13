import React from 'react'
import {TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {Text, ListItem} from 'native-base'

const HighGradeWishlistText = ({highGrades}) => {
    const navigation = useNavigation();
    
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

export default HighGradeWishlistText
