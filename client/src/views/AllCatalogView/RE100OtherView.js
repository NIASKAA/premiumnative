import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_OTHERS} from '../../utils/queries'
import {GET_OTHERS} from '../../utils/state/actions'
import {RE100OtherList} from '../../components/AllGradeCards'

const RE100OtherView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadingOther, setLoadingOther] = useState(true)
    const {loading, data} = useQuery(GET_ALL_OTHERS)
    let {getOthers} = state
    const [AllOther, setAllOther] = useState(() => [])

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

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>
    
    return (
        <>
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
