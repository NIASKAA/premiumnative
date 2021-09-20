import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {useQuery} from '@apollo/client'
import {Content, Spinner} from 'native-base'
import {GET_ALL_RG} from '../../utils/queries'
import {GET_RGS} from '../../utils/state/actions'
import {RealGradeList} from '../../components/AllGradeCards'

const RealGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadRealGrades, setLoadRealGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_RG)
    const [AllRealGrade, setAllRealGrade] = useState(() => [])
    let {getRG} = state

    useEffect(() => {
        if(loading === false && data) {
            dispatch({type: GET_RGS, payload: data.getRG})
            if(getRG.length === 0) {
                setAllRealGrade(data.getRG)
            } else {
                setAllRealGrade(getRG)
            }
        }
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadRealGrades(false);
        }, 3000);
    }, [loadRealGrades]);

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>

    return (
        <>
            <Content style={styles.content}>
                <View style={styles.view}>
                    {loadRealGrades && <Spinner color="#a9a9a9" style={styles.spinner}/>}
                    {!loadRealGrades && !loading && <RealGradeList realGrades={AllRealGrade}/>}
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

export default RealGradeView
