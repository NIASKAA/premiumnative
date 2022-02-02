import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner, Item, Icon, Input, Header, Title, Left, Right, Body} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_OTHERS, GET_SAVE_OTHER} from '../../utils/queries'
import {GET_OTHERS} from '../../utils/state/actions'
import {RE100OtherList} from '../../components/AllGradeCards'

const RE100OtherView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadingOther, setLoadingOther] = useState(true)
    const {loading, data} = useQuery(GET_ALL_OTHERS)
    let {getOthers} = state
    const [AllOther, setAllOther] = useState(() => [])
    const [searchGunpla, setSearchGunpla] = useState("")

    useEffect(() => {
        if(loading === false && data) {
        dispatch({type: GET_OTHERS, payload: data.getOthers})
            if(getOthers.length === 0) {
                setAllOther(data.getOthers)
            } else {
                setAllOther(getOthers)
            }
        }
        console.log(data)
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadingOther(false);
        }, 2000)
    }, [loadingOther]);

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getOthers.length <= 1) {
            dispatch({type: GET_OTHERS, payload: data.getOthers})
            setAllOther(state.getOthers)
        } else {
            setAllOther.filter((re100) => re100.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
        }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>
    
    return (
        <>
            <Header>
                <Left/>
                    <Body>
                        <Item>
                            <Icon name="ios-search"/>
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
                    {loadingOther && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                    {!loadingOther && !loading && <RE100OtherList re100Others={AllOther}/>}
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

export default RE100OtherView
