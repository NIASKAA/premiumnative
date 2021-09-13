import React,{useState, useEffect} from 'react'
import BottomNavigation from '../components/Footer'
import {Segment, Header, Title, Text, Button, Content} from 'native-base';
import {SavedList, Wishlist} from '../components'

const ProfileView = () => {
const [activePage, setActivePage] = useState(1)

useEffect(() => {
    const renderSegment = () => {
        if(activePage === 1) return <SavedList />
        else return <Wishlist />
    } 
    renderSegment()
}, [activePage])

const renderSegment = () => {
    if(activePage === 1) return <SavedList />
    else return <Wishlist />
} 
    return (
        <>
            <Header hasSegment>
                <Title>Profile</Title>
            </Header>

            <Segment>
                <Button 
                    first
                    active={activePage === 1}
                    onPress={() => setActivePage(1)}>
                        <Text>
                            Owned
                        </Text>
                </Button>
                <Button 
                    last
                    active={activePage === 2}
                    onPress={() => setActivePage(2)}>
                        <Text>
                            Wishlist
                        </Text>
                </Button>
            </Segment>
            
            <Content>
                {renderSegment()}
            </Content>
           
           <BottomNavigation/>
        </>
    )
}

export default ProfileView;