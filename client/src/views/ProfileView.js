import React,{useState, useEffect} from 'react'
import {RefreshControl, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
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
                 {renderSegment()}

           <BottomNavigation/>
        </>
    )
}

export default ProfileView;