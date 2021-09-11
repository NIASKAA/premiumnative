import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_OTHERS} from '../../utils/queries'
import {GET_OTHERS} from '../../utils/state/actions'
import {RE100OtherCards} from '../../components/AllGradeCards'

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
        }, 3000)
    });

    if(loading) return <Spinner/>
    return (
        <>
            <Content>
                {!loadingOther && !loading && <RE100OtherCards re100Others={AllOther}/>}
            </Content>
        </>
    )
}

export default RE100OtherView
