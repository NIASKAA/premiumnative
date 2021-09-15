import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client"
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'
import { GET_HIGHGRADE_WISH } from '../../utils/queries'

const HighGradeWishlistText = ({highGrades}) => {
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

export default HighGradeWishlistText
