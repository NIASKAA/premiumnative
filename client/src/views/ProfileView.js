import React from 'react'
import BottomNavigation from '../components/Footer'
import {Segment, Header, Title, Text, Button, Content} from 'native-base';


const ProfileView = () => {
    return (
        <>
            <Header hasSegment>
                <Title>Profile</Title>
            </Header>

            <Segment>
                <Button first><Text>Owned</Text></Button>
                <Button last><Text>Wishlist</Text></Button>
            </Segment>
            
            <Content>
            </Content>
           
           <BottomNavigation/>
        </>
    )
}

export default ProfileView;