import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_MASTERGRADE} from '../../../utils/mutations'
import {MASTERGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'

const MasterGradeCards = ({masterGrade}) => {
    const [saveMasterGrade] = useMutation(SAVE_MASTERGRADE)
    const [masterGradeWishlist] = useMutation(MASTERGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotMasterGrades: 'No mastergrade',
        masterGradeWish: 'No mastergrade'
    })

    const saveToList = async () => {
        try {
            const response = await saveMasterGrade({
                variables: {
                    name: masterGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotMasterGrades: response})
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        event.preventDefault();
        try {
            const wishResponse = await masterGradeWishlist({
                variables: {
                    name: masterGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, masterGradeWish: wishResponse})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Card masterGrade={masterGrade} key={masterGrade.id}>
            <CardItem cardBody>
                <FastImage source={{uri: masterGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{masterGrade.gunplaName}</Text>
                    <Text>{masterGrade.series}</Text>
                    <Text>{masterGrade.releaseDate}</Text>
                    <Text>{masterGrade.price}</Text>
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

export default MasterGradeCards
