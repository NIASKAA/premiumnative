import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_OTHERS} from '../../../utils/mutations'
import {OTHER_WISHLIST} from '../../../utils/mutations'
import {StyleSheet, TouchableOpacity, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'

const RE100OtherCards = ({re100Other}) => {
    const [saveOthers] = useMutation(SAVE_OTHERS)
    const [otherWishlist] = useMutation(OTHER_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotRE100s: 'No others',
        re100Wish: 'no others'
    });
    const [saved, setSaved] = useState(false)
    const [errors, setErrors] = useState({
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })

    const saveToList = async () => {
        try {
            const response = await saveOthers({
                variables: {
                    name: re100Other.gunplaName
                }
            })
            setProfileData({...ProfileData, gotRE100s: response})
            setSaved(true)
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
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, re100Wish: wishResponse})
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
                <FastImage source={{uri: re100Other.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>Name: {re100Other.gunplaName}</Text>
                    <Text>Series: {re100Other.series}</Text>
                    <Text>Release Date: {re100Other.releaseDate}</Text>
                    <Text>Price: {re100Other.price}</Text>
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

export default RE100OtherCards
