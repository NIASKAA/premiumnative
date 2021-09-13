import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const MasterGradeWishlistText = ({masterGrades}) => {
    const navigation = useNavigation()
    
    return (
        <>
            {masterGrades.map((masterGrade) => (
                <ListItem masterGrade={masterGrade} key={masterGrade.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('MoreInfoView', masterGrade)}> 
                        <Text>{masterGrade.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default MasterGradeWishlistText
