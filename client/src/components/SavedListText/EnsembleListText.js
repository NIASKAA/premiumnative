import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const EnsembleListText = ({ensembles}) => {
    const navigation = useNavigation();

    return (
        <>
            {ensembles.map((ensemble) => (
                <ListItem ensemble={ensemble} key={ensemble.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('EnsembleInfoView', ensemble)}>
                        <Text>{ensemble.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default EnsembleListText
