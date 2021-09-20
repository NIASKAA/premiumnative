import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner} from "native-base"
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

    if(loading) return <Spinner color="#a9a9a9" style={styles.spinner}/>
    
    return (
        <>
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
