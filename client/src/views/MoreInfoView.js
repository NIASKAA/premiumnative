import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {useMutation} from '@apollo/client'
import {Text, Body, Card, CardItem, Left, Button} from 'native-base'
import {DELETE_CONVERGE_WISHLIST, DELETE_CONVERGE_SAVE} from '../utils/mutations'


const MoreInfoView = ({navigation, route}) => {
    const {gunplaName, image, releaseDate, price, series, _id} = route.params
    const [deleteConvergeWishlist] = useMutation(DELETE_CONVERGE_WISHLIST)
    const [deleteConvergeSave] = useMutation(DELETE_CONVERGE_SAVE)

    const deleteItem = (id) => {
        try {
            deleteConvergeWishlist({
                variables: {
                    convergeID: id
                }
            })
            console.log(id)
        } catch (error) {
            console.log(error)
        }  
    }

    const deleteSave = (id) => {
        try {
            deleteConvergeSave({
                variables: {
                    convergeID: id
                }
            })
        } catch (error) {
            console.log(error)
        }
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

export default MoreInfoView
