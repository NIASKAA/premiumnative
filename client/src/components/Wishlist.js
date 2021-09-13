import React, {useState, useEffect} from 'react'
import {useQuery} from "@apollo/client"
import {
    GET_CONVERGE_WISH, 
    GET_HIGHGRADE_WISH, 
    GET_REALGRADE_WISH, 
    GET_MASTERGRADE_WISH, 
    GET_PERFECTGRADE_WISH,
    GET_SDGRADE_WISH,
    GET_OTHER_WISH} from '../utils/queries'
import {List, ListItem, Text, Separator} from 'native-base'
import {HighGradeWishlistText, RealGradeWishlistText, MasterGradeWishlistText, ConvergeWishlist, RE100OtherWishlist, PerfectGradeWishlist, SDGradeWishlist} from './WishlistText'

const Wishlist = () => {
    const {loading: loadHighWish, data: highWishData} = useQuery(GET_HIGHGRADE_WISH)
    const {loading: loadRealWish, data: realWishData} = useQuery(GET_REALGRADE_WISH)
    const {loading: loadMasterWish, data: masterWishData} = useQuery(GET_MASTERGRADE_WISH)
    const {loading: loadPerfectGradeWish, data: perfectGradeWishData} = useQuery(GET_PERFECTGRADE_WISH)
    const {loading: loadSDWish, data: SDWishData} = useQuery(GET_SDGRADE_WISH)
    const {loading: loadOtherWish, data: otherWishData} = useQuery(GET_OTHER_WISH)
    const {loading: loadConvergeWish, data: convergeWishData} = useQuery(GET_CONVERGE_WISH)
    const [loadConvergeList, setLoadConvergeList] = useState(undefined)
    const [loadHighList, setLoadHighList] = useState(undefined)
    const [loadRealList, setLoadRealList] = useState(undefined)
    const [loadMasterList, setLoadMasterList] = useState(undefined)
    const [loadPerfectGradeList, setLoadPerfectGradeList] = useState(undefined)
    const [loadSDList, setLoadSDList] = useState(undefined)
    const [loadOtherList, setLoadOtherList] = useState(undefined)

    useEffect(() => {
        if(!loadHighList && highWishData) {
            setLoadHighList(highWishData.getUserHighWishlist.highGradeWish)
        }
    }, [loadHighWish, highWishData])

    useEffect(() => {
        if(!loadConvergeList && convergeWishData) {
            setLoadConvergeList(convergeWishData.getUserConvergeWishlist.convergeWish)
        }
    }, [loadConvergeWish, convergeWishData])

    useEffect(() => {
        if(!loadRealList && realWishData) {
            setLoadRealList(realWishData.getUserRealWishlist.realGradeWish)
        }
    }, [loadRealWish, realWishData])
 
     useEffect(() => {
         if(!loadMasterList && masterWishData) {
             setLoadMasterList(masterWishData.getUserMasterWishlist.masterGradeWish)
         }
     }, [loadMasterList, masterWishData])
 
     useEffect(() => {
         if(!loadPerfectGradeList && perfectGradeWishData) {
             setLoadPerfectGradeList(perfectGradeWishData.getUserPerfectWishlist.perfectGradeWish)
         }
     }, [loadPerfectGradeList, perfectGradeWishData])
 
     useEffect(() => {
         if(!loadSDList && SDWishData) {
             setLoadSDList(SDWishData.getUserSDWishlist.sdGradeWish)
         }
     }, [loadSDList, SDWishData])
 
     useEffect(() => {
         if(!loadOtherList && otherWishData) {
             setLoadOtherList(otherWishData.getUserOtherWishlist.re100Wish)
         }
     }, [loadOtherList, otherWishData])

    return (
        <>
            <List>
                <Separator bordered>
                    <Text>HG</Text>
                </Separator>
                {loadHighList && !loadHighWish && <HighGradeWishlistText highGrades={loadHighList}/>}
                <Separator bordered>
                    <Text>RG</Text>
                </Separator>
                {loadRealList && !loadRealWish && <RealGradeWishlistText realGrades={loadRealList}/>}
                <Separator bordered>
                    <Text>RE/100 & Other</Text>
                </Separator>
                {loadOtherList && !loadOtherWish && <RE100OtherWishlist re100Others={loadOtherList}/>}
                <Separator bordered>
                    <Text>MG</Text>
                </Separator>
                {loadMasterList && !loadMasterWish && <MasterGradeWishlistText masterGrades={loadMasterList}/>}
                <Separator bordered>
                    <Text>PG</Text>
                </Separator>
                {loadPerfectGradeList && !loadPerfectGradeWish && <PerfectGradeWishlist perfectGrades={loadPerfectGradeList}/>}
                <Separator bordered>
                    <Text>SD</Text>
                </Separator>
                {loadSDList && !loadSDWish && <SDGradeWishlist SDGrades={loadSDList}/>}
                <Separator bordered>
                    <Text>Converge</Text>
                </Separator>
                {loadConvergeList && !loadConvergeWish && <ConvergeWishlist converges={loadConvergeList}/>}
            </List>
        </>
    )
}

export default Wishlist
