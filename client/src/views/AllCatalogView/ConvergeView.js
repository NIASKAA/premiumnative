import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Content, Spinner} from "native-base"
import {useQuery} from "@apollo/client"
import {GET_ALL_CONVERGES} from '../../utils/queries'
import {GET_CONVERGES} from '../../utils/state/actions'
import {ConvergeCards} from '../../components/AllGradeCards'

const ConvergeView = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const [loadingConverge, setLoadingConverge] = useState(true)
    const {loading, data} = useQuery(GET_ALL_CONVERGES)
    let {getConverges} = state
    const [AllConverge, setAllConverge] = useState(() => [])

    useEffect(() => {
        if(loading === false && data) {
          dispatch({type: GET_CONVERGES, payload: data.getConverges})
          if(getConverges.length === 0) {
            setAllConverge(data.getConverges)
          } else {
            setAllConverge(getConverges)
          }
        }
    }, [loading ,data])

    useEffect(() => {
        setTimeout(() => {
          setLoadingConverge(false);
        }, 3000);
    });

    if(loading) return <Spinner/>
    return (
        <>
            <Content>
                {loadingConverge && <Spinner/>}
                {!loadingConverge && !loading && <ConvergeCards converges={AllConverge}/>}
            </Content>
        </>
    )
}

export default ConvergeView
