import React from 'react'
import {StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {Text, Body, Card, CardItem, Left} from 'native-base'

const MoreInfoView = ({navigation, route}) => {
    const {gunplaName, image, releaseDate, price, series} = route.params
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
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: 400
    }
})

export default MoreInfoView