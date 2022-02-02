import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner, Item, Icon, Input, Header, Title, Left, Body, Right} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_PG} from '../../utils/queries'
import {GET_PGS} from '../../utils/state/actions'
import {PerfectGradeList} from '../../components/AllGradeCards'

const PerfectGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadPerfectGrades, setLoadPerfectGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_PG)
    let {getPG} = state 
    const [AllPerfectGrade, setAllPerfectGrade] = useState(() => [])
    const [searchGunpla, setSearchGunpla] = useState("");

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_PGS, payload: data.getPG})
            if(getPG.length === 0) {
                setAllPerfectGrade(data.getPG)
            } else {
                setAllPerfectGrade(getPG)
            }
        }
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadPerfectGrades(false)
        }, 2000)
    }, [loadPerfectGrades])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getPG.length <= 1) {
            dispatch({type: GET_PGS, payload: data.getPG})
            setAllPerfectGrade(state.getPG)
        } else {
            setAllPerfectGrade.filter((perfectGrade) => perfectGrade.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
        }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>
    
    return (
        <>
            <Header searchBar rounded>
                <Left/>
                    <Body>
                        <Title>Perfect Grades</Title>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search"
                            value={searchGunpla}
                            onChangeText={(text) => {
                                setSearchGunpla(text);
                                searchHandler(searchGunpla);
                            }}/>
                    </Body>
                <Right/>
            </Header>
            <Content style={styles.content}>
                <View style={styles.view}>
                    {loadPerfectGrades && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                    {!loadPerfectGrades && !loading && <PerfectGradeList perfectGrades={AllPerfectGrade}/>}
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

export default PerfectGradeView
