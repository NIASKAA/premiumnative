import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useQuery} from '@apollo/client'
import {Content, Spinner} from 'native-base'
import {GET_ALL_HG} from '../../utils/queries'
import {GET_HGS} from '../../utils/state/actions'
import {HighGradeList} from '../../components/AllGradeCards/'

const HighGradeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadHighGrades, setLoadHighGrades] = useState(true)
    const {loading, data} = useQuery(GET_ALL_HG)
    const [AllHighGrade, setAllHighGrade] = useState(() => [])
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
    });

    if(loading) return <Spinner/>
    return (
        <>
            <Content>
                {loadHighGrades && <Spinner/>}
                {!loadHighGrades && !loading && <HighGradeList highGrades={AllHighGrade}/> }
            </Content>
        </>
    )
}

export default HighGradeView
