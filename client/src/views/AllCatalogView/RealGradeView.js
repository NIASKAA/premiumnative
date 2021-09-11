import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useQuery} from '@apollo/client'
import {Content, Spinner} from 'native-base'
import {GET_ALL_RG} from '../../utils/queries'
import {GET_RGS} from '../../utils/state/actions'
import {RealGradeCards} from '../../components/AllGradeCards'

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
        console.log(data)
    }, [loading, data])

    useEffect(() => {
        setTimeout(() => {
            setLoadRealGrades(false);
        }, 3000);
    });

    if(loading) return <Spinner/>

    return (
        <>
            <Content>
                {!loadRealGrades && !loading && <RealGradeCards realGrades={AllRealGrade}/>}
            </Content>
        </>
    )
}

export default RealGradeView
