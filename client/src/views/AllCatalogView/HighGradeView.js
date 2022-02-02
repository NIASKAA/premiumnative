import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {useQuery} from '@apollo/client'
import {Content, Spinner, Item, Icon, Input, Header, Title, Left, Right, Body} from 'native-base'
import {GET_ALL_HG} from '../../utils/queries'
import {GET_HGS} from '../../utils/state/actions'
import {HighGradeList} from '../../components/AllGradeCards/'
import BottomNavigation from '../../components/Footer'

const HighGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadHighGrades, setLoadHighGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_HG)
    const [AllHighGrade, setAllHighGrade] = useState(() => [])
    const [searchGunpla, setSearchGunpla] = useState("");
    let {getHG} = state

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_HGS, payload: data.getHG})
            if(getHG.length === 0) {
                setAllHighGrade(data.getHG)
            } else {
                setAllHighGrade(getHG)
            }
        }
        
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadHighGrades(false);
        }, 3000);
    }, [loadHighGrades]);

    const searchHandler = (input) => {
        if(searchGunpla.trim().length <= 1 && getHG.length <= 1) {
            dispatch({type: GET_HGS, payload: data.getHG})
            setAllHighGrade(state.getHG)
        } else {
            setAllHighGrade.filter((highGrade) => highGrade.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase()))
        }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>

    return (
        <>  
            <Header searchBar rounded>
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
                    {loadHighGrades && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                    {!loadHighGrades && !loading && <HighGradeList highGrades={AllHighGrade}/> }
                </View>
            </Content>
            <BottomNavigation/>
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

export default HighGradeView
