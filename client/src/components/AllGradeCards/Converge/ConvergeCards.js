import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_CONVERGE} from '../../../utils/mutations'
import {CONVERGE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const ConvergeCards = ({converge}) => {
    const [saveConverge] = useMutation(SAVE_CONVERGE)
    const [convergeWishlist] = useMutation(CONVERGE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotConverges: "No Converges",
        convergeWish: 'No Converges'
    });

    const saveToList = async () => {
        try {
            const response = await saveConverge({
                variables: {
                    name: converge.gunplaName
                }
            })
            setProfileData({...ProfileData, gotConverges: response})
            console.log(ProfileData)
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        try {
            const wishResponse = await convergeWishlist({
                variables: {
                    name: converge.gunplaName
                }
            })
            setProfileData({...ProfileData, convergeWish: wishResponse})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card converge={converge} key={converge.id}>
            <CardItem cardBody>
                <FastImage source={{uri: converge.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{converge.gunplaName}</Text>
                    <Text>{converge.series}</Text>
                    <Text>{converge.releaseDate}</Text>
                    <Text>{converge.price}</Text>
                </Body>
            </CardItem>
        </Card>
    )
}

const styles= StyleSheet.create({
    grades: {
        width: '100%',
        height: 200
    }
})

export default ConvergeCards
