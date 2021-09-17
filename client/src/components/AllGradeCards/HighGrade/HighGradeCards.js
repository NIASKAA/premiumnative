import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_HIGHGRADE} from '../../../utils/mutations'
import {HIGHGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet, TouchableOpacity, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body} from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'
 
const HighGradeCards = ({highGrade}) => {
    const [saveHighGrade] = useMutation(SAVE_HIGHGRADE)
    const [highGradeWishlist] = useMutation(HIGHGRADE_WISHLIST)
    const [saved, setSaved] = useState(false)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        gotConverges: "No Converges",
        convergeWish: 'No Converges'
    });
    const [errors, setErrors] = useState({
        addToWishlistSuccess: null,
        addToWishlistFail: null
    })
    
    const saveToList = async () => {
        try {
            const response = await saveHighGrade({
                variables: {
                    name: highGrade.gunplaName
                }
            })
            setProfileData({gotHighGrades: response})
            setSaved(true)
        } catch (error) {
            console.log(error)
        }
    }
    
    const saveToWishlist = async () => {
        try {
            const response = await highGradeWishlist({
                variables: {
                    name: highGrade.gunplaName
                }
            })
            setErrors({...errors, addToWishlistSuccess: true})
            setProfileData({highGradeWish: response})
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
                <FastImage source={{uri: highGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{highGrade.gunplaName}</Text>
                    <Text>{highGrade.series}</Text>
                    <Text>{highGrade.releaseDate}</Text>
                    <Text>{highGrade.price}</Text>
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

export default HighGradeCards
