import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const ConvergeWishlistText = ({converges}) => {
    const navigation = useNavigation()

    return (
        <>
            {converges.map((converge) => (
                <ListItem converge={converge} key={converge.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('MoreInfoView', converge)}>
                        <Text>{converge.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default ConvergeWishlistText
