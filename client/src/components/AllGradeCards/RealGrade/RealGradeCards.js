import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_REALGRADE} from '../../../utils/mutations'
import {REALGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const RealGradeCards = ({realGrade}) => {
    const [saveRealGrade] = useMutation(SAVE_REALGRADE)
    const [realGradeWishlist] = useMutation(REALGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRealGrades: 'No realgrades'
    })

    const saveToList = async () => {
        try {
            const response = await saveRealGrade({
                variables: {
                    name: realGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotRealGrades: response})
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        try {
            const response = await realGradeWishlist({
                variables: {
                    name: realGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, realGradeWish: response})
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Card>
            <CardItem cardBody>
                <FastImage source={{uri: realGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{realGrade.gunplaName}</Text>
                    <Text>{realGrade.series}</Text>
                    <Text>{realGrade.releaseDate}</Text>
                    <Text>{realGrade.price}</Text>
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

export default RealGradeCards
