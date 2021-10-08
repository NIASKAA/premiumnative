import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_REALGRADE} from '../../../utils/mutations'
import {REALGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet, TouchableOpacity, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'

const RealGradeCards = ({realGrade}) => {
    const [saveRealGrade] = useMutation(SAVE_REALGRADE)
    const [realGradeWishlist] = useMutation(REALGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRealGrades: 'No realgrades'
    })
    const [saved, setSaved] = useState(false)
    const [errors, setErrors] = useState({
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })

    const saveToList = async () => {
        try {
            const response = await saveRealGrade({
                variables: {
                    name: realGrade.gunplaName
                }
            })
            setProfileData({...ProfileData, gotRealGrades: response})
            setSaved(true)
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
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, realGradeWish: response})
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
                <FastImage source={{uri: realGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>Name: {realGrade.gunplaName}</Text>
                    <Text>Series: {realGrade.series}</Text>
                    <Text>Release Date: {realGrade.releaseDate}</Text>
                    <Text>Price: {realGrade.price} (Yen)</Text>
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

export default RealGradeCards
