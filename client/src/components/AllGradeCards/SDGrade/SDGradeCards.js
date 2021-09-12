import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_SDGRADE} from '../../../utils/mutations'
import {SDGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const SDGradeCards = ({SDGrade}) => {
    const [saveSDGrade] = useMutation(SAVE_SDGRADE)
    const [sdGradeWishlist] = useMutation(SDGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotSDGrades: 'No sdgrades',
        sdGradeWish: 'No sdGrade'
    })
    const saveToList = async () => {
        try {
            const response = await saveSDGrade({
                variables: {
                    name: sdGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotSDGrades: response})
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        try {
            const wishResponse = await sdGradeWishlist({
                variables: {
                    name: sdGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, sdGradeWish: wishResponse})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card SDGrade={SDGrade} key={SDGrade.id}>
            <CardItem cardBody>
                <FastImage source={{uri: SDGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{SDGrade.gunplaName}</Text>
                    <Text>{SDGrade.series}</Text>
                    <Text>{SDGrade.releaseDate}</Text>
                    <Text>{SDGrade.price}</Text>
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

export default SDGradeCards
