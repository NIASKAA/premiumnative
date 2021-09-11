import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_SD} from '../../utils/queries'
import {GET_SDS} from '../../utils/state/actions'
import {SDGradeCards} from '../../components/AllGradeCards'

const SDGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadSDGrade, setLoadSDGrade] = useState(true)
    const {loading, data} = useQuery(GET_ALL_SD)
    let {getSD} = state
    const [AllSDGrade, setAllSDGrade] = useState(() => [])

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
        })
    }, 3000)

    if(loading) return <Spinner/>

    return (
        <>
            <Content>
                {loadSDGrade && <Spinner/>}
                {!loadSDGrade && !loading && <SDGradeCards SDGrades={AllSDGrade}/>}
            </Content>
        </>
    )
}

export default SDGradeView
