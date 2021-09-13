import React from 'react'
import {List, ListItem, Text} from 'native-base'

const Wishlist = () => {
    return (
        <>
            <List>
                <ListItem itemDivider>
                    <Text>HG</Text>
                </ListItem>
                <ListItem>
                    <Text>Testing</Text>
                </ListItem>
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
