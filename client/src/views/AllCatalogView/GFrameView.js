import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner, Item, Icon, Input, Header, Title, Left, Right, Body} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_GFRAME} from '../../utils/queries'
import {GET_GFRAME, GET_HGS} from '../../utils/state/actions'
import {GFrameList} from '../../components/AllGradeCards'

const GFrameView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadGFrame, setLoadGFrame] = useState(true)
    const {loading, data} = useQuery(GET_ALL_GFRAME)
    const {getGFrame} = state
    const [AllGFrame, setAllGFrame] = useState(() => [])
    const [searchGunpla, setSearchGunpla] = useState("");

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_GFRAME, payload: data.getGFrame})
            if(getGFrame.length === 0) {
                setAllGFrame(data.getGFrame)
            } else {
                setAllGFrame(getGFrame)
            }
        }
        console.log(data)
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadGFrame(false);
        }, 3000)
    }, [loadGFrame])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getGFrame.length <= 1) {
            dispatch({type: GET_HGS, payload: data.getGFrame})
            setAllGFrame(state.getGFrame)
        } else {
            setAllGFrame.filter((gFrame) => gFrame.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
        }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner} />

    return (
        <>
            <Header searchBar rounded>
                <Left/>
                    <Body>
                        <Title>G-Frames</Title>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Search"
                                value={searchGunpla}
                                onChangeText={(text) => {
                                    setSearchGunpla(text);
                                    searchHandler(searchGunpla);
                                }}/>
                        </Item>
                    </Body>
                <Right/>
            </Header>
            <Content style={styles.content}>
                <View style={styles.view}>
                    {loadGFrame && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                    {!loadGFrame && !loading && <GFrameList GFrames={AllGFrame} />}
                </View>
            </Content>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
    },
    view: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    spinner: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '55%'
    }
})

export default GFrameView
