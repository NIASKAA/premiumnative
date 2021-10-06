import React from 'react'
import {TouchableOpacity, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const HighGradeWishlistText = ({highGrades}) => {
    const navigation = useNavigation();
 
    return (
        <>
            {highGrades.map((highGrade) => (
                <ListItem highGrade={highGrade} key={highGrade.id}>
                    <Pressable onPress={() => navigation.navigate('HighGradeInfoView', highGrade)}>
                        <Text>{highGrade.gunplaName}</Text>
                    </Pressable>
                </ListItem>
            ))}
        </>
    )
}

export default HighGradeWishlistText
