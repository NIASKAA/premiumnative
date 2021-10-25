import React from 'react'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Text, ListItem} from 'native-base'

const GFrameListText = ({GFrames}) => {
    const navigation = useNavigation()

    return (
        <>
            {GFrames.map((GFrame) => (
                <ListItem GFrame={GFrame} key={GFrame.id}>
                    <TouchableOpacity onPress={() => navigation.navigate('GFrameInfoView', GFrame)}>
                        <Text>{GFrame.gunplaName}</Text>
                    </TouchableOpacity>
                </ListItem>
            ))}
        </>
    )
}

export default GFrameListText
