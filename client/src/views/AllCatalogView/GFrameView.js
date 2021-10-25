import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_GFRAME} from '../../utils/queries'
import {GET_GFRAME} from '../../utils/state/actions'
import {GFrameList} from '../../components/AllGradeCards'

const GFrameView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadGFrame, setLoadGFrame] = useState(true)
    const {loading, data} = useQuery(GET_ALL_GFRAME)
    const {getGFrame} = state
    const [AllGFrame, setAllGFrame] = useState(() => [])

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_GFRAME, payload: data.getGFrame})
            if(getGFrame.length === 0) {
                setAllGFrame(data.getGFrame)
            } else {
                setAllGFrame(getGFrame)
            }
        }
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadGFrame(false);
        }, 3000)
    }, [loadGFrame])

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner} />

    return (
        <>
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
