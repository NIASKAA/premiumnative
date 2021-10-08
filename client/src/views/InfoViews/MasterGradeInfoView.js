import React, {useState} from 'react'
import {StyleSheet, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {useMutation} from '@apollo/client'
import {Text, Body, Card, CardItem, Left, Button} from 'native-base'
import {DELETE_MASTERGRADE_WISHLIST, DELETE_MASTERGRADE_SAVE} from '../../utils/mutations'

const MasterGradeInfoView = ({route}) => {
    const {gunplaName, image, releaseDate, price, series, _id} = route.params
    const [deleteMasterGradeWishlist] = useMutation(DELETE_MASTERGRADE_WISHLIST)
    const [deleteMasterGradeSave] = useMutation(DELETE_MASTERGRADE_SAVE)
    const [errors, setErrors] = useState({
        deleteWishlistSuccess: null,
        deleteWishlistFail: null,
        deleteSaveSuccess: null,
        deleteSaveFail: null
    })

    const deleteItem = (id) => {
        try {
            setErrors({...errors, deleteWishlistSuccess: true})
            deleteMasterGradeWishlist({
                variables: {
                    masterGradeID: id
                }
            })
            console.log(id)
        } catch (error) {
            console.log(error)
            setErrors({...errors, deleteWishlistFail: true})
        }  
    }

    const deleteSave = (id) => {
        try {
            setErrors({...errors, deleteSaveSuccess: true})
            deleteMasterGradeSave({
                variables: {
                    masterGradeID: id
                }
            })
        } catch (error) {
            console.log(error)
            setErrors({...errors, deleteSaveFail: true})
        }
    }

    if(errors.deleteWishlistSuccess === true) {
        Alert.alert('Deleted Successfully!')
    }

    if(errors.deleteWishlistFail === true) {
        Alert.alert('Item does not exist in you list!')
    }

    if(errors.deleteSavedSuccess === true) {
        Alert.alert('Deleted Successfully!')
    }

    if(errors.deleteSaveFail === true) {
        Alert.alert('Item does not exist in your list!')
    }  
      
    return (
        <>
            <Card>
                <CardItem cardBody>
                    <FastImage source={{uri: image}} style={styles.cardImage}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>Name: {gunplaName}</Text>
                            <Text>Series: {series}</Text>
                            <Text>Release Date: {releaseDate}</Text>
                            <Text>Price: {price} (Yen)</Text>
                        </Body>
                    </Left>
                </CardItem>
                <Button style={styles.delBtn} onPress={() => deleteSave(_id)}><Text>Delete from saved list</Text></Button>
                <Button style={styles.delBtn} onPress={() => deleteItem(_id)}><Text>Delete from wishlist</Text></Button>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: 400
    },
    delBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 6,
        marginBottom: 6,
        backgroundColor: 'red'
    }
})

export default MasterGradeInfoView
