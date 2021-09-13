import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_PERFECTGRADE} from '../../../utils/mutations'
import {PERFECTGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const PerfectGradeCards = ({perfectGrade}) => {
    const [savePerfectGrade] = useMutation(SAVE_PERFECTGRADE)
    const [perfectGradeWishlist] = useMutation(PERFECTGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotPerfectGrades: 'No perfectgrade'
    })

    const saveToList = async () => {
        event.preventDefault()
        try {
            const response = await savePerfectGrade({
                variables: {
                    name: perfectGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotPerfectGrades: response})
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        try {
            const response = await perfectGradeWishlist({
                variables: {
                    name: perfectGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, perfectGradeWish: response})
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <Card>
            <CardItem cardBody>
                <FastImage source={{uri: perfectGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{perfectGrade.gunplaName}</Text>
                    <Text>{perfectGrade.series}</Text>
                    <Text>{perfectGrade.releaseDate}</Text>
                    <Text>{perfectGrade.price}</Text>
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

export default PerfectGradeCards
