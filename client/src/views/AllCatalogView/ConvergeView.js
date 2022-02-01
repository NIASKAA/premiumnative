import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner, Item, Icon, Input} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_CONVERGES} from '../../utils/queries'
import {GET_CONVERGES} from '../../utils/state/actions'
import {ConvergeList} from '../../components/AllGradeCards'

const ConvergeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [searchGunpla, setSearchGunpla] = useState("")
    const [loadingConverge, setLoadingConverge] = useState(true)
    const {loading, data} = useQuery(GET_ALL_CONVERGES)
    let {getConverges} = state
    const [AllConverge, setAllConverge] = useState(() => [])

    useEffect(() => {
        if(loading === false && data) {
          dispatch({type: GET_CONVERGES, payload: data.getConverges})
          if(getConverges.length === 0) {
            setAllConverge(data.getConverges)
          } else {
            setAllConverge(getConverges)
          }
        }
    }, [loading ,data])

    useEffect(() => {
        setTimeout(() => {
          setLoadingConverge(false);
        }, 3000);
    }, [loadingConverge]);

    const searchHandler = (input) => {
      if(searchGunpla.trim().length <= 1 && getConverges.length <= 1) {
        dispatch({type: GET_CONVERGES, payload: data.getConverges})
        setAllConverge(state.getConverges)
      } else {
        setAllConverge(
          getConverges.filter((converge) =>
            converge.gunplaName.trim().toLowerCase().includes(input.trim().toLowerCase())) 
        )
      }
    }

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>

    return (
        <>
            <Content style={styles.content}>
              <View style={styles.view}>
                <Item>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" 
                    value={searchGunpla}
                    onChangeText={(text) => {
                      setSearchGunpla(text)
                      searchHandler(searchGunpla)
                    }}
                  />
                </Item>
                {loadingConverge && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                {!loadingConverge && !loading && <ConvergeList converges={AllConverge}/>}
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

export default ConvergeView
