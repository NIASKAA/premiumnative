import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_MASTERGRADE} from '../../../utils/mutations'
import {MASTERGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet, TouchableOpacity, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'

const MasterGradeCards = ({masterGrade}) => {
    const [saveMasterGrade] = useMutation(SAVE_MASTERGRADE)
    const [masterGradeWishlist] = useMutation(MASTERGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotMasterGrades: 'No mastergrade',
        masterGradeWish: 'No mastergrade'
    })
    const [saved, setSaved] = useState(false)
    const [errors, setErrors] = useState({
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })

    const saveToList = async () => {
        try {
            const response = await saveMasterGrade({
                variables: {
                    name: masterGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotMasterGrades: response})
            setSaved(true)
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        try {
            const wishResponse = await masterGradeWishlist({
                variables: {
                    name: masterGrade.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, masterGradeWish: wishResponse})
        } catch (error) {
            console.log(error)
            setErrors({...errors, addToWishlistFail: true})
        }
    }

    if(errors.addToWishlistSuccess === true) {
        Alert.alert('Added to Wishlist!')
    }

    return (
        <Card>
            <CardItem cardBody>
                <FastImage source={{uri: masterGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{masterGrade.gunplaName}</Text>
                    <Text>{masterGrade.series}</Text>
                    <Text>{masterGrade.releaseDate}</Text>
                    <Text>{masterGrade.price}</Text>
                    <TouchableOpacity onPress={saveToWishlist}>
                        <Icon name="add-to-list" size={28} style={styles.likedSaveIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={saveToList}>
                        <Icon name={saved ? 'star' : 'star-outlined'} size={28} style={styles.likedWishlist}/>
                    </TouchableOpacity>
                </Body>
            </CardItem>
        </Card>
    )
}

const styles= StyleSheet.create({
    grades: {
        width: '100%',
        height: 200
    },
    likedWishlist: {
        position: 'absolute',
        bottom: 50,
        left: '92%', 
        textAlign: 'right',
        flex: 1
    },
    likedSaveIcon: {
        position: 'absolute',
        bottom: -2,
        left: '93%',
        textAlign: 'right',
        flex: 1
    } 
})

export default MasterGradeCards
