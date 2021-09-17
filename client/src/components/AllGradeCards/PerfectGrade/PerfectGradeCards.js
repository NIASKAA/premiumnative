import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_PERFECTGRADE} from '../../../utils/mutations'
import {PERFECTGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet, TouchableOpacity, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'

const PerfectGradeCards = ({perfectGrade}) => {
    const [savePerfectGrade] = useMutation(SAVE_PERFECTGRADE)
    const [perfectGradeWishlist] = useMutation(PERFECTGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotPerfectGrades: 'No perfectgrade'
    })
    const [saved, setSaved] = useState(false)
    const [errors, setErrors] = useState({
        addToWishlistSuccess: null,
        addToWishlistFail: null
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
            setSaved(true)
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
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, perfectGradeWish: response})
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
                <FastImage source={{uri: perfectGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{perfectGrade.gunplaName}</Text>
                    <Text>{perfectGrade.series}</Text>
                    <Text>{perfectGrade.releaseDate}</Text>
                    <Text>{perfectGrade.price}</Text>
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

export default PerfectGradeCards
