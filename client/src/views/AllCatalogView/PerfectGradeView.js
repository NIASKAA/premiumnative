import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_PG} from '../../utils/queries'
import {GET_PGS} from '../../utils/state/actions'
import {PerfectGradeCards} from '../../components/AllGradeCards'

const PerfectGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadPerfectGrades, setLoadPerfectGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_PG)
    let {getPG} = state 
    const [AllPerfectGrade, setAllPerfectGrade] = useState(() => [])

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
        }, 1000)
    })

    if(loading) return <Spinner/>
    
    return (
        <>
            <Content>
                {loadPerfectGrades && <Spinner/>}
                {!loadPerfectGrades && !loading && <PerfectGradeCards perfectGrades={AllPerfectGrade}/>}
            </Content>
        </>
    )
}

export default PerfectGradeView
