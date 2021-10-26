import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_GFRAME} from '../../../utils/mutations'
import {GFRAME_WISHLIST} from '../../../utils/mutations'
import {StyleSheet, TouchableOpacity, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'

const GFrameCards = ({GFrame}) => {
    const [saveGFrame] = useMutation(SAVE_GFRAME)
    const [GFrameWishlist] = useMutation(GFRAME_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotGFrame: 'No GFrame',
        GFrameWish: 'No GFrame'
    });

    const [saved, setSaved] = useState(false)
    const [errors, setErrors] = useState({
        addToWishlistSuccess: null, 
        addToWishlistFail: null
    })

    const saveToList = async () => {
        try {
            const response = await saveGFrame({
                variables: {
                    name: GFrame.gunplaName
                }
            })
            setProfileData({...ProfileData, gotGFrame: response})
            setSaved(true)
        } catch (error) {
            console.log(error)
        }
    }

    const saveToWishlist = async () => {
        try {
            const wishResponse = await GFrameWishlist({
                variables: {
                    name: GFrame.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({...ProfileData, GFrameWish: wishResponse})
        } catch (error) {
            console.log(error)
        }
    }

    if(errors.addToWishlistFail === true) {
        Alert.alert('Added to Wishlist!')
    }

    return (
        <Card>
            <CardItem cardBody>
                <FastImage source={{uri: GFrame.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>Name: {GFrame.gunplaName}</Text>
                    <Text>Series: {GFrame.series}</Text>
                    <Text>Release Date: {GFrame.releaseDate}</Text>
                    <Text>Price: {GFrame.price} (Yen)</Text>
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

export default GFrameCards
