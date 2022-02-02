import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner, Item, Icon, Input, Header, Title, Left, Body, Right} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_MG} from '../../utils/queries'
import {GET_MGS} from '../../utils/state/actions'
import {MasterGradeList} from '../../components/AllGradeCards'

const MasterGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadMasterGrade, setLoadMasterGrade] = useState(true)
    const {loading, data, refetch} = useQuery(GET_ALL_MG)
    let {getMG} = state
    const [AllMasterGrade, setAllMasterGrade] = useState(() => [])
    const [searchGunpla, setSearchGunpla] = useState("");

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_MGS, payload: data.getMG})
            if(getMG.length === 0) {
                setAllMasterGrade(data.getMG)
            } else {
                setAllMasterGrade(getMG)
            }
        }
        refetch()
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadMasterGrade(false)
        }, 3000)
    }, [loadMasterGrade])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getMG.length <= 1) {
            dispatch({type: GET_MGS, payload: data.getMG})
            setAllMasterGrade(state.getMG)
        } else {
            setAllMasterGrade.filter((masterGrade) => masterGrade.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
        }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>
    
    return (
        <>
            <Header searchBar rounded>
                <Left/>
                    <Body>
                        <Title>Master Grades</Title>
                        <Item>
                            <Icon name="ios-search"/>
                            <Input placeholder="Search"
                                value={searchGunpla}
                                onChangeText={(text) => {
                                    setSearchGunpla(text);
                                    searchHandler(searchGunpla);
                                }}
                            />
                        </Item>
                    </Body>
                <Right/>
            </Header>
            <Content style={styles.content}>
                <View style={styles.view}>
                    {loadMasterGrade && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                    {!loadMasterGrade && !loading && <MasterGradeList masterGrades={AllMasterGrade}/>}
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

export default MasterGradeView
