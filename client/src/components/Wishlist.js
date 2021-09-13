import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client"
import {
    GET_CONVERGE_WISH, 
    GET_HIGHGRADE_WISH, 
    GET_REALGRADE_WISH, 
    GET_MASTERGRADE_WISH, 
    GET_PERFECTGRADE_WISH,
    GET_SDGRADE_WISH,
    GET_OTHER_WISH} from '../utils/queries'
import {List, ListItem, Text} from 'native-base'
import HighGradeWishlistText from './WishlistText/HighGradeWishlistText'

const Wishlist = () => {
    const {loading: loadHighWish, data: highWishData} = useQuery(GET_HIGHGRADE_WISH)
    const [loadHighList, setLoadHighList] = useState(undefined)

    useEffect(() => {
        if(!loadHighList && highWishData) {
            setLoadHighList(highWishData.getUserHighWishlist.highGradeWish)
        }
    }, [loadHighWish, highWishData])

    return (
        <>
            <List>
                <ListItem itemDivider>
                    <Text>HG</Text>
                </ListItem>
                {loadHighList && !loadHighWish && <HighGradeWishlistText highGrades={loadHighList} />}
                <ListItem itemDivider>
                    <Text>RG</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>RE/100 & Other</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>MG</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>PG</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>SD</Text>
                </ListItem>
                <ListItem>
                    <Text>Test</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Converge</Text>
                </ListItem>
                <ListItem>
                    <Text>Test</Text>
                </ListItem>
            </List>
        </>
    )
}

export default Wishlist
