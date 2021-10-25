import React from 'react'
import {StyleSheet, Alert} from 'react-native'
import FastImage from 'react-native-fast-image'
import {useMutation} from '@apollo/client'
import {Text, Body, Card, CardItem, Left, Button} from 'native-base'
import {DELETE_GFRAME_WISHLIST, DELETE_GFRAME_SAVE} from '../../utils/mutations'

const GFrameInfoView = ({route}) => {
    const {gunplaName, image, releaseDate, price, series, _id} = route.params 
    const [deleteGFrameWishlist] = useMutation(DELETE_GFRAME_WISHLIST)
    const [deleteGFrameSave] = useMutation(DELETE_GFRAME_SAVE)
    const [errors, setErrors] = useState({
        deleteSavedSuccess: null,
        deleteSavedFail: null,
        deleteWishlistSuccess: null,
        deleteWishlistFail: null
    })

    const deleteItem = (id) => {
        try {
            setErrors({...errors, deleteWishlistSuccess: true})
            deleteGFrameWishlist({
                variables: {
                    GFrameID: id
                }
            })
        } catch (error) {
            console.log(error)
            setErrors({...errors, deleteWishlistFail: true})
        }
    }

    const deleteSave = (id) => {
        try{
            setErrors({...errors, deleteSavedSuccess: true})
            deleteGFrameSave({
                variables: {
                    GFrameID: id
                }
            })
        } catch (error) {
            console.log(error)
            setErrors({...errors, deleteSavedFail: true})
        }
    } 

    if(errors.deleteWishlistSuccess === true) {
        Alert.alert('Deleted Successfully!')
    }

    if(errors.deleteWishlistFail === true) {
        Alert.alert('Item does not exist in your list!')
    }

    if(errors.deleteSavedSuccess === true) {
        Alert.alert('Deleted Successfully!')
    }

    if(errors.deleteSavedFail === true) {
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

export default GFrameInfoView
