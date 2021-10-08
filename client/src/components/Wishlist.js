import React, {useState, useEffect} from 'react'
import {SafeAreaView, RefreshControl, ScrollView} from 'react-native'
import {useQuery} from "@apollo/client"
import {
    GET_HIGHGRADE_WISH,
    GET_CONVERGE_WISH, 
    GET_REALGRADE_WISH, 
    GET_MASTERGRADE_WISH, 
    GET_PERFECTGRADE_WISH,
    GET_SDGRADE_WISH,
    GET_OTHER_WISH} from '../utils/queries'
import {List, Text, Separator, Content} from 'native-base'
import {
    HighGradeWishlistText, 
    RealGradeWishlistText, 
    MasterGradeWishlistText, 
    ConvergeWishlist, 
    RE100OtherWishlist, 
    PerfectGradeWishlist, 
    SDGradeWishlist
} from './WishlistText'

const Wishlist = () => {
    const {loading, data, refetch} = useQuery(GET_HIGHGRADE_WISH)
    const {loading: loadRealWish, data: realWishData, refetch: refetchReal} = useQuery(GET_REALGRADE_WISH)
    const {loading: loadMasterWish, data: masterWishData, refetch: refetchMaster} = useQuery(GET_MASTERGRADE_WISH)
    const {loading: loadPerfectGradeWish, data: perfectGradeWishData, refetch: refetchPerfect} = useQuery(GET_PERFECTGRADE_WISH)
    const {loading: loadSDWish, data: SDWishData, refetch: refetchSD} = useQuery(GET_SDGRADE_WISH)
    const {loading: loadOtherWish, data: otherWishData, refetch: refetchOther} = useQuery(GET_OTHER_WISH)
    const {loading: loadConvergeWish, data: convergeWishData, refetch: refetchConverge} = useQuery(GET_CONVERGE_WISH)
    const [loadConvergeList, setLoadConvergeList] = useState(undefined)
    const [loadRealList, setLoadRealList] = useState(undefined)
    const [loadMasterList, setLoadMasterList] = useState(undefined)
    const [loadPerfectGradeList, setLoadPerfectGradeList] = useState(undefined)
    const [loadSDList, setLoadSDList] = useState(undefined)
    const [loadOtherList, setLoadOtherList] = useState(undefined)
    const [loadHighList, setLoadHighList] = useState(undefined)
    const [refreshing, setRefreshing] = React.useState(false)

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refetch();
        refetchConverge();
        refetchReal();
        refetchMaster();
        refetchPerfect();
        refetchOther();
        refetchSD();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        if(!loadHighList && data) {
            setLoadHighList(data.getUserHighWishlist.highGradeWish)
        } else return
        refetch();
    }, [loading, data])

    useEffect(() => {
        if(!loadConvergeList && convergeWishData) {
            setLoadConvergeList(convergeWishData.getUserConvergeWishlist.convergeWish)
        } else return
        refetchConverge();
    }, [loadConvergeWish, convergeWishData])

    useEffect(() => {
        if(!loadRealList && realWishData) {
            setLoadRealList(realWishData.getUserRealWishlist.realGradeWish)
        } else return
        refetchReal();
    }, [loadRealWish, realWishData])
 
     useEffect(() => {
        if(!loadMasterList && masterWishData) {
            setLoadMasterList(masterWishData.getUserMasterWishlist.masterGradeWish)
        } else return
        refetchMaster();
     }, [loadMasterList, masterWishData])
 
     useEffect(() => {
        if(!loadPerfectGradeList && perfectGradeWishData) {
            setLoadPerfectGradeList(perfectGradeWishData.getUserPerfectWishlist.perfectGradeWish)
        } else return
        refetchPerfect();
     }, [loadPerfectGradeList, perfectGradeWishData])
 
     useEffect(() => {
        if(!loadSDList && SDWishData) {
            setLoadSDList(SDWishData.getUserSDWishlist.sdGradeWish)
        } else return
        refetchSD();
     }, [loadSDList, SDWishData])
 
     useEffect(() => {
        if(!loadOtherList && otherWishData) {
        setLoadOtherList(otherWishData.getUserOtherWishlist.re100Wish)
        } else return
        refetchOther();
     }, [loadOtherList, otherWishData])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
                <Content>       
                    <List>
                        <Separator bordered>
                            <Text>High Grades</Text>
                        </Separator>
                        {loadHighList && !loading && <HighGradeWishlistText highGrades={loadHighList}/>}
                        <Separator bordered>
                            <Text>Real Grades</Text>
                        </Separator>
                        {loadRealList && !loadRealWish && <RealGradeWishlistText realGrades={loadRealList}/>}
                        <Separator bordered>
                            <Text>RE/100 & Other</Text>
                        </Separator>
                        {loadOtherList && !loadOtherWish && <RE100OtherWishlist re100Others={loadOtherList}/>}
                        <Separator bordered>
                            <Text>Master Grades</Text>
                        </Separator>
                        {loadMasterList && !loadMasterWish && <MasterGradeWishlistText masterGrades={loadMasterList}/>}
                        <Separator bordered>
                            <Text>Perfect Grades</Text>
                        </Separator>
                        {loadPerfectGradeList && !loadPerfectGradeWish && <PerfectGradeWishlist perfectGrades={loadPerfectGradeList}/>}
                        <Separator bordered>
                            <Text>SD Grades</Text>
                        </Separator>
                        {loadSDList && !loadSDWish && <SDGradeWishlist SDGrades={loadSDList}/>}
                        <Separator bordered>
                            <Text>Converges</Text>
                        </Separator>
                        {loadConvergeList && !loadConvergeWish && <ConvergeWishlist converges={loadConvergeList}/>}
                    </List>
                </Content>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Wishlist
