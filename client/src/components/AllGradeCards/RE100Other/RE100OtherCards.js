import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_OTHERS} from '../../../utils/mutations'
import {OTHER_WISHLIST} from '../../../utils/mutations'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const RE100OtherCards = ({re100Other}) => {
    const [saveOthers] = useMutation(SAVE_OTHERS)
    const [otherWishlist] = useMutation(OTHER_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRE100s: 'No others',
        re100Wish: 'no others'
    });

    const saveToList = async () => {
        try {
            const response = await saveOthers({
                variables: {
                    name: re100Other.gunplaName
                }
            })
            setProfileData({...ProfileData, gotRE100s: response})
            console.log(ProfileData)
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        try {
            const wishResponse = await otherWishlist({
                variables: {
                    name: re100Other.gunplaName
                }
            })
            setProfileData({...ProfileData, re100Wish: wishResponse})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card>
            <CardItem cardBody>
                <FastImage source={{uri: re100Other.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>Name: {re100Other.gunplaName}</Text>
                    <Text>Series: {re100Other.series}</Text>
                    <Text>Release Date: {re100Other.releaseDate}</Text>
                    <Text>Price: {re100Other.price}</Text>
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

export default RE100OtherCards
