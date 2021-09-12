import React, {useState} from 'react'
import {useMutation} from '@apollo/client'
import {SAVE_HIGHGRADE} from '../../../utils/mutations'
import {HIGHGRADE_WISHLIST} from '../../../utils/mutations'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Card, CardItem, Text, Body, Button} from 'native-base'

 
const HighGradeCards = ({highGrade}) => {
    const [saveHighGrade] = useMutation(SAVE_HIGHGRADE)
    const [highGradeWishlist] = useMutation(HIGHGRADE_WISHLIST)
    const [ProfileData, setProfileData] = useState({
        email: 'No email',
        username: 'No username',
        highGradeWish: 'No Converges'
    });

  
    const saveToWishlist = async () => {
        try {
            const response = await highGradeWishlist({
                variables: {
                    name: highGrade.gunplaName
                }
            })
            console.log(response)
            setProfileData({...ProfileData, highGradeWish: response})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Card highGrade={highGrade} key={highGrade.id}>
            <CardItem cardBody>
                <FastImage source={{uri: highGrade.image}} style={styles.grades}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{highGrade.gunplaName}</Text>
                    <Text>{highGrade.series}</Text>
                    <Text>{highGrade.releaseDate}</Text>
                    <Text>{highGrade.price}</Text>
                    <Button onPress={saveToWishlist}><Text>Save to Wishlist</Text></Button>
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
    }
})

export default HighGradeCards
