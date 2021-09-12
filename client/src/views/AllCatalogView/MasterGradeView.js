import React, {useEffect, useState} from 'react'
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
    const {loading, data} = useQuery(GET_ALL_MG)
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
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadMasterGrade(false)
        }, 3000)
    }, [loadMasterGrade])

    if(loading) return <Spinner/>
    return (
        <>
            <Content>
                {!loadMasterGrade && !loading && <MasterGradeList masterGrades={AllMasterGrade}/>}
            </Content>
        </>
    )
}

export default MasterGradeView
