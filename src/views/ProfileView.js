import React from 'react'
import {Segment, Header, Title, Text, Button} from 'native-base';


export function ProfileView() {
    return (
        <>
            <Header hasSegment>
                <Title>Profile</Title>
            </Header>
            <Segment>
                <Button first><Text>Owned</Text></Button>
                <Button last><Text>Wishlist</Text></Button>
            </Segment>
           
        </>
    )
}