import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner, Item, Icon, Input, Header, Title, Right, Left, Body} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_SD} from '../../utils/queries'
import {GET_SDS} from '../../utils/state/actions'
import {SDGradeList} from '../../components/AllGradeCards'

const SDGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadSDGrade, setLoadSDGrade] = useState(true)
    const {loading, data} = useQuery(GET_ALL_SD)
    let {getSD} = state
    const [AllSDGrade, setAllSDGrade] = useState(() => [])
    const [searchGunpla, setSearchGunpla] = useState("");

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_SDS, payload: data.getSD})
            if(getSD.length === 0) {
                setAllSDGrade(data.getSD)
            } else {
                setAllSDGrade(getSD)
            }
        }
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadSDGrade(false)
        }, 3000)
    }, [loadSDGrade])

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getSD.length <= 1) {
            dispatch({type: GET_SDS, payload: data.getSD})
            setAllSDGrade(state.getSD)
        } else {
            setAllSDGrade.filter((sdGrade) => sdGrade.length.trim().toLowerCase().includes(input.trim().toLowerCase())) 
        }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>

    return (
        
        <>
            <Header>
                <Left/>
                    <Body>
                        <Title>SD Grades</Title>
                        <Item>
                            <Icon name='ios-search'/>
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
                    {loadSDGrade && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                    {!loadSDGrade && !loading && <SDGradeList SDGrades={AllSDGrade}/>}
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

export default SDGradeView
