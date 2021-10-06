import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const RE100OtherWishlist = ({re100Others}) => {
    const navigation = useNavigation()

    return (
        <>
            {re100Others.map((re100Other) => (
                <ListItem re100Other={re100Other} key={re100Other.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('RE100OtherInfoView', re100Other)}>
                        <Text>{re100Other.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default RE100OtherWishlist
