import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_SDGRADE} from '../../../utils/mutations'
import {SDGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet, TouchableOpacity, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'

const SDGradeCards = ({SDGrade}) => {
    const [saveSDGrade] = useMutation(SAVE_SDGRADE)
    const [sdGradeWishlist] = useMutation(SDGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotSDGrades: 'No sdgrades',
        sdGradeWish: 'No sdGrade'
    })
    const [saved, setSaved] = useState(false)
    const [errors, setErrors] = useState({
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })

    const saveToList = async () => {
        try {
            const response = await saveSDGrade({
                variables: {
                    name: sdGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotSDGrades: response})
            setSaved(true)
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
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, sdGradeWish: wishResponse})
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
                <FastImage source={{uri: SDGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{SDGrade.gunplaName}</Text>
                    <Text>{SDGrade.series}</Text>
                    <Text>{SDGrade.releaseDate}</Text>
                    <Text>{SDGrade.price}</Text>
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

export default SDGradeCards
